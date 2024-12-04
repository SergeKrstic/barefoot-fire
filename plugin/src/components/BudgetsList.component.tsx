import { memo } from 'react'
import { BudgetAnalysisPackage, Category } from '@fire/pocketsmith-api'

import { CollapsibleTree } from 'components'
import { useBudgets, BudgetMap } from 'queries'

export const BudgetsList = memo(function BudgetsList(): JSX.Element {
  const { data: budgets, isLoading } = useBudgets()

  if (isLoading) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  return (
    <CollapsibleTree
      tree={budgets.categories}
      context={budgets.budgetMap}
      renderCollapsibleItemContent={(item: Category, budgetMap: BudgetMap) => <div>{item.title}</div>}
      renderLeafItemContent={(item: Category, budgetMap: BudgetMap) => (
        <div className="fire-section-item">
          <div>{item.title}</div>
          <div>{getForecastAmount(budgetMap[item.id!])}</div>
        </div>
      )}
    />
  )
})

function getForecastAmount(budget: BudgetAnalysisPackage): number | undefined {
  if (!budget) return undefined
  if (budget.income) return budget.income.total_forecast_amount
  if (budget.expense) return budget.expense.total_forecast_amount
  return undefined
}
