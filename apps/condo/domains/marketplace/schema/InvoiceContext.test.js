/**
 * Generated by `createschema marketplace.InvoiceContext 'organization:Relationship:Organization:PROTECT; recipient:Json; email:Text; settings:Json; state:Json;'`
 */

const {
    makeLoggedInAdminClient,
    makeClient,
    expectValuesOfCommonFields,
    expectToThrowGQLError,
    expectToThrowUniqueConstraintViolationError,
} = require('@open-condo/keystone/test.utils')
const {
    expectToThrowAuthenticationErrorToObj, expectToThrowAuthenticationErrorToObjects,
    expectToThrowAccessDeniedErrorToObj,
} = require('@open-condo/keystone/test.utils')

const { COMMON_ERRORS } = require('@condo/domains/common/constants/errors')
const { TAX_REGIME_SIMPLE, DEFAULT_IMPLICIT_FEE_PERCENT } = require('@condo/domains/marketplace/constants')
const {
    InvoiceContext,
    createTestInvoiceContext,
    updateTestInvoiceContext,
} = require('@condo/domains/marketplace/utils/testSchema')
const {
    createTestOrganization,
    createTestOrganizationEmployee,
    createTestOrganizationEmployeeRole,
} = require('@condo/domains/organization/utils/testSchema')
const {
    makeClientWithNewRegisteredAndLoggedInUser,
    makeClientWithSupportUser,
} = require('@condo/domains/user/utils/testSchema')

let adminClient, supportClient, anonymousClient

describe('InvoiceContext', () => {
    beforeAll(async () => {
        adminClient = await makeLoggedInAdminClient()
        supportClient = await makeClientWithSupportUser()
        anonymousClient = await makeClient()
    })

    describe('CRUD tests', () => {
        describe('create', () => {
            test('admin can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [obj, attrs] = await createTestInvoiceContext(adminClient, o10n)
                expectValuesOfCommonFields(obj, attrs, adminClient)
                expect(Number(obj.implicitFeePercent)).toEqual(Number(DEFAULT_IMPLICIT_FEE_PERCENT))
            })

            test('support can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [obj, attrs] = await createTestInvoiceContext(supportClient, o10n)
                expectValuesOfCommonFields(obj, attrs, supportClient)
            })

            test('staff with permission can', async () => {
                const [o10n] = await createTestOrganization(adminClient)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canManageInvoiceContexts: true })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                const [obj, attrs] = await createTestInvoiceContext(client, o10n)

                expectValuesOfCommonFields(obj, attrs, client)
            })

            test('staff without permission can\'t', async () => {
                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [o10n] = await createTestOrganization(adminClient)
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canManageInvoiceContexts: false })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                await expectToThrowAccessDeniedErrorToObj(async () => {
                    await createTestInvoiceContext(client, o10n)
                })
            })

            test('anonymous can\'t', async () => {
                await expectToThrowAuthenticationErrorToObj(async () => {
                    await createTestInvoiceContext(anonymousClient, { id: 'does-not-matter' })
                })
            })

            test('only one context per organization may be created', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                await createTestInvoiceContext(adminClient, o10n)

                await expectToThrowUniqueConstraintViolationError(async () => {
                    await createTestInvoiceContext(adminClient, o10n)
                }, 'invoiceContext_unique_organization')
            })
        })

        describe('update', () => {
            test('admin can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)
                const [obj, attrs] = await updateTestInvoiceContext(adminClient, objCreated.id)

                expect(obj.dv).toEqual(1)
                expect(obj.sender).toEqual(attrs.sender)
                expect(obj.v).toEqual(2)
                expect(obj.updatedBy).toEqual(expect.objectContaining({ id: adminClient.user.id }))
            })

            test('support can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const [obj, attrs] = await updateTestInvoiceContext(supportClient, objCreated.id)

                expect(obj.dv).toEqual(1)
                expect(obj.sender).toEqual(attrs.sender)
                expect(obj.v).toEqual(2)
                expect(obj.updatedBy).toEqual(expect.objectContaining({ id: supportClient.user.id }))
            })

            test('staff with permission can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canManageInvoiceContexts: true })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                const [obj, attrs] = await updateTestInvoiceContext(client, objCreated.id)

                expect(obj.dv).toEqual(1)
                expect(obj.sender).toEqual(attrs.sender)
                expect(obj.v).toEqual(2)
                expect(obj.updatedBy).toEqual(expect.objectContaining({ id: client.user.id }))
            })

            test('staff without permission can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canManageInvoiceContexts: false })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                await expectToThrowAccessDeniedErrorToObj(async () => {
                    await updateTestInvoiceContext(client, objCreated.id)
                })
            })

            test('anonymous can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                await expectToThrowAuthenticationErrorToObj(async () => {
                    await updateTestInvoiceContext(anonymousClient, objCreated.id)
                })
            })
        })

        describe('hard delete', () => {
            test('admin can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                await expectToThrowAccessDeniedErrorToObj(async () => {
                    await InvoiceContext.delete(adminClient, objCreated.id)
                })
            })

            test('user can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                await expectToThrowAccessDeniedErrorToObj(async () => {
                    await InvoiceContext.delete(client, objCreated.id)
                })
            })

            test('anonymous can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClient()
                await expectToThrowAccessDeniedErrorToObj(async () => {
                    await InvoiceContext.delete(client, objCreated.id)
                })
            })
        })

        describe('read', () => {
            test('admin can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [obj] = await createTestInvoiceContext(adminClient, o10n)

                const objs = await InvoiceContext.getAll(adminClient, {}, { sortBy: ['updatedAt_DESC'] })

                expect(objs.length).toBeGreaterThanOrEqual(1)
                expect(objs).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: obj.id,
                    }),
                ]))
            })

            test('support can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [obj] = await createTestInvoiceContext(adminClient, o10n)

                const objs = await InvoiceContext.getAll(supportClient, {}, { sortBy: ['updatedAt_DESC'] })

                expect(objs.length).toBeGreaterThanOrEqual(1)
                expect(objs).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: obj.id,
                    }),
                ]))
            })

            test('staff with permission can', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                const [objCreated] = await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canReadInvoiceContexts: true })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                const objs = await InvoiceContext.getAll(client, {}, { sortBy: ['updatedAt_DESC'] })

                expect(objs.length).toBeGreaterThanOrEqual(1)
                expect(objs).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: objCreated.id,
                    }),
                ]))
            })

            test('staff without permission can\'t', async () => {
                const [o10n] = await createTestOrganization(adminClient)
                await createTestInvoiceContext(adminClient, o10n)

                const client = await makeClientWithNewRegisteredAndLoggedInUser()
                const [role] = await createTestOrganizationEmployeeRole(adminClient, o10n, { canReadInvoiceContexts: false })
                await createTestOrganizationEmployee(adminClient, o10n, client.user, role)

                const objs = await InvoiceContext.getAll(client, {}, { sortBy: ['updatedAt_DESC'] })

                expect(objs).toHaveLength(0)
            })

            test('each staff user can read only his organization context', async () => {
                const [o10n1] = await createTestOrganization(adminClient)
                const [o10n2] = await createTestOrganization(adminClient)

                const [objCreated1] = await createTestInvoiceContext(adminClient, o10n1)
                const [objCreated2] = await createTestInvoiceContext(adminClient, o10n2)

                const client1 = await makeClientWithNewRegisteredAndLoggedInUser()
                const client2 = await makeClientWithNewRegisteredAndLoggedInUser()

                const [role1] = await createTestOrganizationEmployeeRole(adminClient, o10n1, { canReadInvoiceContexts: true })
                await createTestOrganizationEmployee(adminClient, o10n1, client1.user, role1)

                const [role2] = await createTestOrganizationEmployeeRole(adminClient, o10n2, { canReadInvoiceContexts: true })
                await createTestOrganizationEmployee(adminClient, o10n2, client2.user, role2)

                const objs1 = await InvoiceContext.getAll(client1, {}, { sortBy: ['updatedAt_DESC'] })
                const objs2 = await InvoiceContext.getAll(client2, {}, { sortBy: ['updatedAt_DESC'] })

                expect(objs1).toEqual([expect.objectContaining({ id: objCreated1.id })])
                expect(objs2).toEqual([expect.objectContaining({ id: objCreated2.id })])
            })

            test('anonymous can\'t', async () => {
                const client = await makeClient()
                await expectToThrowAuthenticationErrorToObjects(async () => {
                    await InvoiceContext.getAll(client, {}, { sortBy: ['updatedAt_DESC'] })
                })
            })
        })
    })

    describe('field: implicitFeePercent', () => {

        let fee_invoiceContext, fee_o10n

        beforeAll(async () => {
            const [o10n] = await createTestOrganization(adminClient)
            fee_o10n = o10n
            const [obj] = await createTestInvoiceContext(adminClient, o10n)
            fee_invoiceContext = obj
        })

        test('admin can edit', async () => {
            const [obj, attrs] = await updateTestInvoiceContext(adminClient, fee_invoiceContext.id, { implicitFeePercent: '3.1' })

            expect(obj.sender).toEqual(attrs.sender)
            expect(obj.updatedBy).toEqual(expect.objectContaining({ id: adminClient.user.id }))
            expect(Number(obj.implicitFeePercent)).toEqual(Number(attrs.implicitFeePercent))
        })

        test('support can edit', async () => {
            const [obj, attrs] = await updateTestInvoiceContext(supportClient, fee_invoiceContext.id, { implicitFeePercent: '8' })

            expect(obj.sender).toEqual(attrs.sender)
            expect(obj.updatedBy).toEqual(expect.objectContaining({ id: supportClient.user.id }))
            expect(Number(obj.implicitFeePercent)).toEqual(Number(attrs.implicitFeePercent))
        })

        test('staff with permission can\'t edit', async () => {
            const client = await makeClientWithNewRegisteredAndLoggedInUser()
            const [role] = await createTestOrganizationEmployeeRole(adminClient, fee_o10n, { canManageInvoiceContexts: true })
            await createTestOrganizationEmployee(adminClient, fee_o10n, client.user, role)

            await expectToThrowAccessDeniedErrorToObj(async () => {
                await updateTestInvoiceContext(client, fee_invoiceContext.id, { implicitFeePercent: '4' })
            })
        })
    })

    describe('Validation tests', () => {
        test('Should have correct dv field (=== 1)', async () => {
            const [o10n] = await createTestOrganization(adminClient)
            await expectToThrowGQLError(
                async () => await createTestInvoiceContext(adminClient, o10n, {
                    dv: 42,
                }),
                {
                    code: 'BAD_USER_INPUT',
                    type: 'DV_VERSION_MISMATCH',
                    message: 'Wrong value for data version number',
                    mutation: 'createInvoiceContext',
                    variable: ['data', 'dv'],
                },
            )
        })

        test('should have correct emails within settings', async () => {
            const [o10n] = await createTestOrganization(adminClient)

            await expectToThrowGQLError(async () => {
                await createTestInvoiceContext(adminClient, o10n, {
                    settings: {
                        emails: ['SomeWrongString', 'normal@email.yes'],
                    },
                })
            }, {
                code: 'BAD_USER_INPUT',
                type: 'INVALID_INVOICE_CONTEXT_SETTINGS',
            })
        })

        test('should contain unique emails within settings', async () => {
            const [o10n] = await createTestOrganization(adminClient)

            await expectToThrowGQLError(async () => {
                await createTestInvoiceContext(adminClient, o10n, {
                    settings: {
                        emails: ['normal@email.yes', 'normal@email.yes'],
                    },
                })
            }, {
                code: 'BAD_USER_INPUT',
                type: 'INVALID_INVOICE_CONTEXT_SETTINGS',
            })
        })

        test('vat=0% is not correct for taxRegime=simple', async () => {
            const [o10n] = await createTestOrganization(adminClient)

            await expectToThrowGQLError(async () => {
                await createTestInvoiceContext(adminClient, o10n, { taxRegime: TAX_REGIME_SIMPLE, vatPercent: 0 })
            }, {
                code: 'BAD_USER_INPUT',
                type: 'TAX_REGIME_AND_VAT_NOT_MATCHED',
                message: 'Tax regime and vat values are not matched',
            })
        })

        test('salesTaxPercent must be between 0 and 100', async () => {
            const [o10n1] = await createTestOrganization(adminClient)
            const [o10n2] = await createTestOrganization(adminClient)

            await expectToThrowGQLError(async () => await createTestInvoiceContext(adminClient, o10n1, { salesTaxPercent: '-2' }), COMMON_ERRORS.INVALID_PERCENT_VALUE)
            await expectToThrowGQLError(async () => await createTestInvoiceContext(adminClient, o10n2, { salesTaxPercent: '200' }), COMMON_ERRORS.INVALID_PERCENT_VALUE)
        })
    })
})