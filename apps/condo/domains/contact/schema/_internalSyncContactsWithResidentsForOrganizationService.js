/**
 * Generated by `createservice contact._internalSyncContactsWithResidentsForOrganizationService --type mutations`
 */

const {
    GQLCustomSchema,
    getById,
} = require('@open-condo/keystone/schema')

const { loadListByChunks } = require('@condo/domains/common/utils/serverSchema')
const access = require('@condo/domains/contact/access/_internalSyncContactsWithResidentsForOrganizationService')
const { Contact } = require('@condo/domains/contact/utils/serverSchema')
const { Property } = require('@condo/domains/property/utils/serverSchema')
const { Resident } = require('@condo/domains/resident/utils/serverSchema')

const _internalSyncContactsWithResidentsForOrganizationService = new GQLCustomSchema('_internalSyncContactsWithResidentsForOrganizationService', {
    schemaDoc: 'Mutation to sync organization contacts with organization residents. ' +
        'It takes all organization residents and create contact for each one (if contact with same phone number not exist). ' +
        'Returns array of created contacts',
    types: [
        {
            access: true,
            type: 'input _internalSyncContactsWithResidentsForOrganizationInput { dv: Int!, sender: SenderFieldInput!, organization: OrganizationWhereUniqueInput! }',
        },
    ],
    
    mutations: [
        {
            access: access.can_internalSyncContactsWithResidentsForOrganization,
            schema: '_internalSyncContactsWithResidentsForOrganization(data: _internalSyncContactsWithResidentsForOrganizationInput!): [Contact]',
            resolver: async (parent, args, context) => {
                const { data } = args
                const { dv, sender, organization } = data
                const properties = await loadListByChunks({
                    context,
                    list: Property,
                    where: {
                        organization: { id: organization.id },
                    },
                })
                const residents = await loadListByChunks({
                    context,
                    list: Resident,
                    where: {
                        organization: { id: organization.id },
                        property: { id_in: [...properties.map(x => x.id)] },
                    },
                })
                const createdContacts = []
                for (const resident of residents) {
                    const user = await getById('User', resident.user.id)
                    const phone = user.phone
                    if (phone){
                        const contact = await Contact.getOne(context, { organization: { id: organization.id }, phone: phone })
                        if (contact) continue
                        const contactProps = {
                            dv: dv,
                            sender: sender,
                            organization: { connect: { id: organization.id } },
                            property: { connect: { id: resident.property.id } },
                            unitName: resident.unitName,
                            unitType: resident.unitType,
                            email: user.email,
                            phone: phone,
                            name: user.name,
                        }
                        const createdContact = await Contact.create(context, contactProps)
                        const foundedContact = await getById('Contact', createdContact.id) // hack for getting contact with all fields
                        createdContacts.push(foundedContact)
                    }
                }
                return createdContacts
            },
        },
    ],
    
})

module.exports = {
    _internalSyncContactsWithResidentsForOrganizationService,
}