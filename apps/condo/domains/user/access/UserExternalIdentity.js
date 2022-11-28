/**
 * Generated by `createschema user.UserExternalIdentity`
 */
const { get } = require('lodash')
const { throwAuthenticationError } = require('@open-condo/keystone/apolloErrorFormatter')
const { RESIDENT } = require('@condo/domains/user/constants/common')

async function canReadUserExternalIntegrations ({ authentication: { item: user } }) {
    if (!user) return throwAuthenticationError()
    if (user.deletedAt) return false

    if (user.type === RESIDENT) {
        return {
            user: { id: user.id },
        }
    }

    if (user.isSupport || user.isAdmin) return {}
}

async function canMutateUserExternalIntegrations ({ authentication: { item: user }, originalInput, operation }) {
    if (!user) return throwAuthenticationError()
    if (user.deletedAt) return false
    if (user.isAdmin || user.isSupport) return true
    const deletedAt = get(originalInput, 'deletedAt')

    if (operation === 'create') {
        return false
    } else if (operation === 'update' && !deletedAt) {
        // deny pure update && don't deny softDelete (update with deletedAt input)
        return false
    }

    if (user.type === RESIDENT) {
        return {
            user: { id: user.id },
        }
    }

    return false
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canReadUserExternalIntegrations,
    canMutateUserExternalIntegrations,
}