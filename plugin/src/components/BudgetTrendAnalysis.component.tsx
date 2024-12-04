import { memo } from 'react'
import { useBudgetTrendAnalysis } from 'queries'

export const BudgetTrendAnalysis = memo(function BudgetTrendAnalysis(): JSX.Element {
  const { data: budgets, isPending } = useBudgetTrendAnalysis()

  if (isPending) return <p>Loading...</p>

  if (!budgets) return <p>No budgets found</p>

  console.log(budgets)

  return <div>Budget Trend Analysis</div>
})
