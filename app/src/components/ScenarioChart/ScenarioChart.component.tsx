import { useEffect, useRef } from 'react'

import { ScenarioBudgets, ScenarioEvents, calculateScenarioBudgets } from '@fire/forecast-engine'
import * as Plot from '@observablehq/plot'

const scenarioBudgets: ScenarioBudgets = {
  period: {
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  },
  budgets: [
    {
      name: 'Budget 1',
      amount: 1000,
      frequency: 'year',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 2',
      amount: 100,
      frequency: 'week',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 33',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      name: 'Budget 4',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
  ],
}

const scenario: ScenarioEvents = calculateScenarioBudgets(scenarioBudgets)

export interface ScenarioChartProps {
  width: number
  height: number
}

export function ScenarioChart({ width, height }: ScenarioChartProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('rendering chart', { width, height })

    const processedData = scenario.budgetEvents.map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: new Date(event.date),
        amount: event.value,
        name: budgetEvent.budget.name,
      }))
    })

    const plot = Plot.plot({
      width,
      height,
      marginLeft: 50,
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.rectY(
          processedData.flat(),
          // @ts-expect-error - TS doesn't like the object shorthand
          Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval: 'month', cumulative: true }),
        ),
      ],
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [height, width])

  return <div ref={containerRef} className="h-full w-full" />
}