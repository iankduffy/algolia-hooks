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
  } = usePagination({
    padding: 2,
  })

  console.log(pages)

  // When it the only page hide
  if (!canRefine) return null

  return (
    <>
    <ul>
      <li>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            refine(0)
          }}
        >
          1
        </a>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              refine(page);
            }}
          >
            {page + 1}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            refine(nbPages - 1)
          }}
        >
          {nbPages}
        </a>
      </li>
    </ul>
    </>
  )
}