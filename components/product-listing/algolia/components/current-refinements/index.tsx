'use client'
import { useCurrentRefinements, UseCurrentRefinementsProps } from "react-instantsearch-hooks-web"

interface CurrentRefinements {
  indexName: string
  attribute: string
  label: string
  refinements: CurrentRefinementsValue[]
  refine(refinement: CurrentRefinementsValue): void
}

interface CurrentRefinementsValue {
  attribute: string
  type: string
  value: string | number
  label: string
  operator?: string
  count?: number
  exhaustive?: boolean
}

// Todo: Redesign how this works
export function CurrentRefinements(): JSX.Element | null {
  const { items, canRefine, refine } = useCurrentRefinements()

  // Algolia transform items expects similar type back, 
  // This allows me to get each refine as seperate child
  const flattenedRefinements = items.reduce(
    (memo, value) => [...memo, ...value.refinements], 
      [] as CurrentRefinementsValue[]
    )

  if (!canRefine) return null

  return (
    <details className='py-2 text-sm text-center border-b-2 border-gray-100 lg:text-base'>
      <summary>Current Refinement</summary>
      <div className='flex justify-center gap-2 my-2 lg:my-4'>
        {flattenedRefinements.map((item, key) => {
          console.log(item)
          return (
            <div key={key} className='flex items-center gap-2 pl-2 overflow-hidden capitalize border rounded-full'>
              {item.label} <button className='px-2 py-1 bg-slate-50' onClick={() => refine(item)}>X</button>
            </div>
          )
        })}
      </div>
    </details>
  )
}