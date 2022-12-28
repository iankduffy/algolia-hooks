'use client'
import { useClearRefinements } from 'react-instantsearch-hooks-web'


export function ClearAllRefinement() {
  const { refine, canRefine } = useClearRefinements()

  if (!canRefine) {
    return (
      <p className='text-sm'>Filter Your Results</p>
    )
  }

  return (
    <p className='text-sm cursor-pointer block' onClick={() => refine()}>Clear Filters</p>
  )
}