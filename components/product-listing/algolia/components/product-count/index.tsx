'use client'
import { useInstantSearch } from "react-instantsearch-hooks-web"
import { useHits } from "react-instantsearch-hooks-web"

export function ProductCount() {
  const { results } = useInstantSearch()
  const { hits } = useHits()
  return (
    <div className='min-w-full lg:min-w-0'>
      <p className='text-center'>Showing <span className='font-bold'>{hits.length}</span> of <span className='font-bold'>{results.nbHits}</span></p>
    </div>
  )
}