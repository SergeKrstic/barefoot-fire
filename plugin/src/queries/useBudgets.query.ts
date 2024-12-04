import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { BudgetAnalysisPackage, Category } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'
import { USER_ID } from '../BarefootFire.defaults'

export type BudgetMap = Record<number, BudgetAnalysisPackage>

export interface BudgetsData {
  rootBudgets: BudgetAnalysisPackage[]
  categories: Category[]
  budgetMap: BudgetMap
}

export function useBudgetList(): UseQueryResult<BudgetsData, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-list'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      const budgets = (await api.budgeting.usersIdBudgetGet({ id: USER_ID })).data

      const rootBudgets = budgets?.filter((budget) => !budget.category?.parent_id)
      const categories = rootBudgets?.map((budget) => budget.category as Category) || []
      const budgetMap =
        budgets?.reduce((acc, budget) => {
          if (!budget.category) return acc
          acc[budget.category.id!] = budget
          return acc
        }, {} as BudgetMap) || {}

      return {
        rootBudgets,
        categories,
        budgetMap,
      }
    },
  })
}

export function useBudgetTrendAnalysis(): UseQueryResult<BudgetAnalysisPackage, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-trend-analysis'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (
        await api.budgeting.usersIdTrendAnalysisGet({
          id: USER_ID,
          period: 'months',
          interval: 1,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          categories: '619280', // I. Salary
          scenarios: '1351127', // ANZ Group
        })
      ).data
    },
  })
}

export function useBudgetSummary(): UseQueryResult<BudgetAnalysisPackage, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['budget-summary'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (
        await api.budgeting.usersIdBudgetSummaryGet({
          id: USER_ID,
          period: 'months',
          interval: 1,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
        })
      ).data
    },
  })
}
