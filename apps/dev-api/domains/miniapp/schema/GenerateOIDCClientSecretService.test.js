/**
 * Generated by `createservice miniapp.GenerateOIDCClientSecretService`
 */

const omit = require('lodash/omit')

const { makeClient } = require('@open-condo/keystone/test.utils')
const { expectToThrowAccessDeniedErrorToResult, expectToThrowAuthenticationErrorToResult } = require('@open-condo/keystone/test.utils')

const { OIDC_SECRET_LENGTH, OIDC_SECRET_CHAR_POOL } = require('@dev-api/domains/miniapp/constants/oidc')
const {
    generateOIDCClientSecretByTestClient,
    createTestB2CApp,
    createOIDCClientByTestClient,
    CondoOIDCClient,
} = require('@dev-api/domains/miniapp/utils/testSchema')
const {
    makeLoggedInAdminClient,
    makeLoggedInSupportClient,
    makeRegisteredAndLoggedInUser,
    makeLoggedInCondoAdminClient,
} = require('@dev-api/domains/user/utils/testSchema')
 
describe('GenerateOIDCClientSecretService', () => {
    let admin
    let support
    let b2cUser
    let b2cApp
    let b2bUser
    let anonymous
    let condoAdmin
    let oidcClient
    let initialCondoOidcClient
    beforeAll(async () => {
        admin = await makeLoggedInAdminClient()
        support = await makeLoggedInSupportClient()
        b2cUser = await makeRegisteredAndLoggedInUser()
        b2bUser = await makeRegisteredAndLoggedInUser()
        anonymous = await makeClient()
        condoAdmin = await makeLoggedInCondoAdminClient();

        [b2cApp] = await createTestB2CApp(b2cUser);
        [oidcClient] = await createOIDCClientByTestClient(b2cUser, b2cApp)
        initialCondoOidcClient = await CondoOIDCClient.getOne(condoAdmin, { id: oidcClient.id })
    })
    describe('Access tests', () => {
        test('Admin can generate secrets for any app', async () => {
            const [updatedClient] = await generateOIDCClientSecretByTestClient(admin, b2cApp)
            expect(updatedClient).toHaveProperty('id')
            expect(updatedClient).toHaveProperty('clientSecret')
        })
        test('Support can generate secrets for any app', async () => {
            const [updatedClient] = await generateOIDCClientSecretByTestClient(support, b2cApp)
            expect(updatedClient).toHaveProperty('id')
            expect(updatedClient).toHaveProperty('clientSecret')
        })
        describe('User', () => {
            test('Can generate secrets for app he created', async () => {
                const [updatedClient] = await generateOIDCClientSecretByTestClient(b2cUser, b2cApp)
                expect(updatedClient).toHaveProperty('id')
                expect(updatedClient).toHaveProperty('clientSecret')
            })
            test('Cannot generate secrets for other apps', async () => {
                await expectToThrowAccessDeniedErrorToResult(async () => {
                    await generateOIDCClientSecretByTestClient(b2bUser, b2cApp)
                })
            })
        })
        test('Anonymous cannot generate secrets for any app', async () => {
            await expectToThrowAuthenticationErrorToResult(async () => {
                await generateOIDCClientSecretByTestClient(anonymous, b2cApp)
            })
        })
    })
    describe('Logic tests', () => {
        test('Must change payload field properly', async () => {
            const [updatedClient] = await generateOIDCClientSecretByTestClient(b2cUser, b2cApp)
            expect(updatedClient).toHaveProperty('id', initialCondoOidcClient.id)
            expect(updatedClient).toHaveProperty('clientId', initialCondoOidcClient.clientId)
            expect(updatedClient).toHaveProperty('redirectUri', initialCondoOidcClient.payload.redirect_uris[0])
            expect(updatedClient).toHaveProperty('clientSecret')
            expect(updatedClient.clientSecret).not.toEqual(initialCondoOidcClient.payload.client_secret)

            const updatedCondoClient = await CondoOIDCClient.getOne(condoAdmin, { id: updatedClient.id })
            const initialPayload = omit(initialCondoOidcClient.payload, 'client_secret')
            const updatedPayload = omit(updatedCondoClient.payload, 'client_secret')
            expect(initialPayload).toEqual(updatedPayload)
            expect(updatedCondoClient).toHaveProperty(['payload', 'client_secret'], updatedClient.clientSecret)
        })
        test('Client secret must be strong enough', async () => {
            const [updatedClient] = await generateOIDCClientSecretByTestClient(b2cUser, b2cApp)
            const updatedCondoClient = await CondoOIDCClient.getOne(condoAdmin, { id: updatedClient.id })
            expect(updatedClient).toHaveProperty('clientSecret', updatedCondoClient.payload.client_secret)
            expect(updatedClient.clientSecret).not.toEqual(initialCondoOidcClient.payload.client_secret)
            expect(updatedClient.clientSecret).toMatch(new RegExp(`^[${OIDC_SECRET_CHAR_POOL}]{${OIDC_SECRET_LENGTH}}$`))
        })
        test('Must not change other fields', async () => {
            const [updatedClient] = await generateOIDCClientSecretByTestClient(b2cUser, b2cApp)
            const updatedCondoClient = await CondoOIDCClient.getOne(condoAdmin, { id: updatedClient.id })
            const initialState = omit(initialCondoOidcClient, 'payload')
            const updatedState = omit(updatedCondoClient, 'payload')

            expect(initialState).toEqual(updatedState)
        })
    })
})