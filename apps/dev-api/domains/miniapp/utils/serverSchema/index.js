/**
 * Generated by `createschema miniapp.B2CApp 'name:Text'`
 * In most cases you should not change it by hands
 * Please, don't remove `AUTOGENERATE MARKER`s
 */

const { generateServerUtils } = require('@open-condo/codegen/generate.server.utils')
const { execGqlWithoutAccess } = require('@open-condo/codegen/generate.server.utils')

const {
    B2CApp: B2CAppGQL,
    B2CAppBuild: B2CAppBuildGQL,
    B2CAppPublishRequest: B2CAppPublishRequestGQL,
    PUBLISH_B2C_APP_MUTATION,
} = require('@dev-api/domains/miniapp/gql')
const { IMPORT_B2C_APP_MUTATION } = require('@dev-api/domains/miniapp/gql')
/* AUTOGENERATE MARKER <IMPORT> */

const B2CApp = generateServerUtils(B2CAppGQL)
const B2CAppBuild = generateServerUtils(B2CAppBuildGQL)
const B2CAppPublishRequest = generateServerUtils(B2CAppPublishRequestGQL)

async function publishB2CApp (context, data) {
    if (!context) throw new Error('no context')
    if (!data) throw new Error('no data')

    return await execGqlWithoutAccess(context, {
        query: PUBLISH_B2C_APP_MUTATION,
        variables: { data },
        errorMessage: '[error] Unable to publishB2CApp',
        dataPath: 'obj',
    })
}

async function importB2CApp (context, data) {
    if (!context) throw new Error('no context')
    if (!data) throw new Error('no data')
    if (!data.sender) throw new Error('no data.sender')

    return await execGqlWithoutAccess(context, {
        query: IMPORT_B2C_APP_MUTATION,
        variables: { data },
        errorMessage: '[error] Unable to importB2CApp',
        dataPath: 'obj',
    })
}

/* AUTOGENERATE MARKER <CONST> */

module.exports = {
    B2CApp,
    B2CAppBuild,
    B2CAppPublishRequest,
    publishB2CApp,
    importB2CApp,
/* AUTOGENERATE MARKER <EXPORTS> */
}