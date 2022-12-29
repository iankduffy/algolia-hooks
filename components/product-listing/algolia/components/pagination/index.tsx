'use client'
import { usePagination } from 'react-instantsearch-hooks-web'

// Todo: we need to add more products
export function Pagination(): JSX.Element | null {
  const {
    pages,
    currentRefinement,
    nbHits,
    nbPages,
    isFirstPage,
    isLastPage,
    canRefine,
    refine,
    createURL,
  } = usePagination()

  // When it the only page hide
  if (isFirstPage && isLastPage) return null

  return (
    <>
      Pagniation
    </>
  )
}