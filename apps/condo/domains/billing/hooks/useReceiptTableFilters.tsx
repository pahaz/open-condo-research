import { useMemo } from 'react'
import get from 'lodash/get'
import { useIntl } from '@open-condo/next/intl'
import { BillingCategory as BillingCategoryType } from '@app/condo/schema'
import { BillingIntegrationOrganizationContext, BillingReceiptWhereInput } from '@app/condo/schema'
import { ComponentType, convertToOptions, FilterComponentSize, FiltersMeta } from '@condo/domains/common/utils/filters.utils'
import { categoryToSearchQuery, getFilter, getStringContainsFilter } from '@condo/domains/common/utils/tables.utils'
import { BillingCategory } from '@condo/domains/billing/utils/clientSchema'

const addressFilter = getStringContainsFilter(['property', 'address'])
const unitNameFilter = getStringContainsFilter(['account', 'unitName'])
const accountFilter = getStringContainsFilter(['account', 'number'])
const fullNameFilter = getStringContainsFilter(['account', 'fullName'])
const categoryFilter = getFilter(['category', 'id'], 'array', 'string', 'in')
const periodFilter = (period: string) => ({ period })

export function useReceiptTableFilters (context: BillingIntegrationOrganizationContext, search: string): Array<FiltersMeta<BillingReceiptWhereInput>>  {
    const intl = useIntl()
    const contextPeriod = get(context, ['lastReport', 'period'], null)
    const SelectMessage = intl.formatMessage({ id: 'Select' })
    const StatusMessage =  intl.formatMessage({ id: 'Status' })
    const categorySearchFilter = categoryToSearchQuery(search, intl.messages)
    const { objs: categories } = BillingCategory.useObjects({})
    const categoryOptions = useMemo(() => convertToOptions<BillingCategoryType>(categories, 'name', 'id'), [categories])
    return useMemo(()=>{
        return [
            { keyword: 'period', filters: [periodFilter], defaultValue: contextPeriod },
            { keyword: 'search', filters: [addressFilter, unitNameFilter, accountFilter, fullNameFilter, categorySearchFilter], combineType: 'OR' },
            { keyword: 'address', filters: [addressFilter] },
            { keyword: 'unitName', filters: [unitNameFilter] },
            { keyword: 'account', filters: [accountFilter] },
            { keyword: 'fullName', filters: [fullNameFilter] },
            {
                keyword: 'category',
                filters: [categoryFilter],
                component: {
                    type: ComponentType.Select,
                    options: categoryOptions,
                    props: {
                        mode: 'multiple',
                        showArrow: true,
                        placeholder: SelectMessage,
                    },
                    modalFilterComponentWrapper: {
                        label: StatusMessage,
                        size: FilterComponentSize.Small,
                    },
                },
            },
        ]
    }, [SelectMessage, StatusMessage, categoryOptions, contextPeriod, categorySearchFilter])
  
}