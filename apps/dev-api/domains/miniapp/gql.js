/**
 * Generated by `createschema miniapp.B2CApp 'name:Text'`
 * In most cases you should not change it by hands
 * Please, don't remove `AUTOGENERATE MARKER`s
 */
const { gql } = require('graphql-tag')

const { generateGqlQueries } = require('@open-condo/codegen/generate.gql')

const { AVAILABLE_ENVIRONMENTS } = require('@dev-api/domains/miniapp/constants/publishing')

const COMMON_FIELDS = 'id dv sender { dv fingerprint } v deletedAt newId createdBy { id name } updatedBy { id name } createdAt updatedAt'
const EXPORT_FIELDS = AVAILABLE_ENVIRONMENTS.map(environment => `${environment}ExportId`).join(' ')

const B2C_APP_FIELDS = `{ name developer logo { publicUrl originalFilename } ${COMMON_FIELDS} ${EXPORT_FIELDS} }`
const B2CApp = generateGqlQueries('B2CApp', B2C_APP_FIELDS)

const B2C_APP_BUILD_FIELDS = `{ app { id } version data { publicUrl originalFilename mimetype encoding } ${COMMON_FIELDS} ${EXPORT_FIELDS} }`
const B2CAppBuild = generateGqlQueries('B2CAppBuild', B2C_APP_BUILD_FIELDS)

const B2C_APP_PUBLISH_REQUEST_FIELDS = `{ app { id } status isAppTested isContractSigned isInfoApproved ${COMMON_FIELDS} }`
const B2CAppPublishRequest = generateGqlQueries('B2CAppPublishRequest', B2C_APP_PUBLISH_REQUEST_FIELDS)

const PUBLISH_B2C_APP_MUTATION = gql`
    mutation publishB2CApp ($data: PublishB2CAppInput!) {
        result: publishB2CApp(data: $data) { success }
    }
`

const IMPORT_B2C_APP_MUTATION = gql`
    mutation importB2CApp ($data: ImportB2CAppInput!) {
        result: importB2CApp(data: $data) { success }
    }
`

/* AUTOGENERATE MARKER <CONST> */

module.exports = {
    B2CApp,
    B2CAppBuild,
    B2CAppPublishRequest,
    PUBLISH_B2C_APP_MUTATION,
    IMPORT_B2C_APP_MUTATION,
/* AUTOGENERATE MARKER <EXPORTS> */
}