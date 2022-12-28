'use client'
import { useCurrentRefinements } from "react-instantsearch-hooks-web"

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


const transformItems = (items: CurrentRefinements[]): CurrentRefinementsValue[] => {
  const transformedItems = items.reduce(
  (memo, value) => [...memo, ...value.refinements], 
    [] as CurrentRefinementsValue[]
  )

  return transformedItems
}

// Todo: Fix Typescript Error
export function CurrentRefinements(): JSX.Element | null {
  const { items, canRefine, refine } = useCurrentRefinements<unknown>({
    transformItems
  })

  if (!canRefine) return null

  return (
    <details className='border-b-2 border-gray-100 py-2 text-sm text-center lg:text-base'>
      <summary>Current Refinement</summary>
      <div className='flex gap-2 my-2 justify-center lg:my-4'>
        {items.map((item, key) => {
          return (
            <div key={key} className='pl-2 border rounded-full flex items-center overflow-hidden gap-2 capitalize'>
              {item.label} <button className='py-1 px-2 bg-slate-50' onClick={() => refine(item)}>X</button>
            </div>
          )
        })}
      </div>
    </details>
  )
}