/**
 * Generated by `createschema scope.AssigneeScope 'user:Relationship:User:CASCADE; ticket:Relationship:Ticket:CASCADE;'`
 */

const { Relationship } = require('@keystonejs/fields')
const { GQLListSchema } = require('@condo/keystone/schema')
const { historical, versioned, uuided, tracked, softDeleted, dvAndSender } = require('@condo/keystone/plugins')
const access = require('@condo/domains/scope/access/AssigneeScope')


const AssigneeScope = new GQLListSchema('AssigneeScope', {
    schemaDoc: 'Ticket where user is assignee or executor',
    fields: {
        user: {
            type: Relationship,
            ref: 'User',
            isRequired: true,
            knexOptions: { isNotNullable: true },
            kmigratorOptions: { null: false, on_delete: 'models.CASCADE' },
        },

        ticket: {
            type: Relationship,
            ref: 'Ticket',
            isRequired: true,
            knexOptions: { isNotNullable: true },
            kmigratorOptions: { null: false, on_delete: 'models.CASCADE' },
        },
    },
    kmigratorOptions: {
        constraints: [
            {
                type: 'models.UniqueConstraint',
                fields: ['user', 'ticket'],
                condition: 'Q(deletedAt__isnull=True)',
                name: 'assignee_scope_unique_user_and_ticket',
            },
        ],
    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), dvAndSender(), historical()],
    access: {
        read: access.canReadAssigneeScopes,
        create: access.canManageAssigneeScopes,
        update: access.canManageAssigneeScopes,
        delete: false,
        auth: true,
    },
})

module.exports = {
    AssigneeScope,
}