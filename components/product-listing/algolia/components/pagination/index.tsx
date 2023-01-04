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
    padding: 1,
  })

  console.log(pages)

  const classNames = 'p-3 border flex justify-center'
  const activeClass = 'bg-gray-300'

  const Padding = ({pages, number}) => {
    // if currently a sibling of first / last page return null
    if (pages.includes(number)) return null

    // if not return ...
    return (
      <li className={classNames}>
        ...
      </li>
    )
  }

  console.log(pages)

  // When it the only page hide
  if (!canRefine) return null

  return (
    <>
    <ul className='grid grid-cols-7 gap-2'>
      <li>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            refine(0)
          }}
          className={`${classNames} ${0 === currentRefinement ? activeClass: ''}`}
        >
          1
        </a>
      </li>
      <Padding pages={pages} number={0} />
      {pages.map((page) => {
        if (page === 0 || page === nbPages - 1)  return null
        return (
          <li key={page}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                refine(page);
              }}
              className={`${classNames} ${page === currentRefinement ? activeClass: ''}`}
            >
              {page + 1}
            </a>
          </li>
        )}
      )}
      <Padding pages={pages} number={nbPages - 1} />
      <li>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            refine(nbPages - 1)
          }}
          className={`${classNames} ${nbPages - 1 === currentRefinement ? activeClass: ''}`}
        >
          {nbPages}
        </a>
      </li>
    </ul>
    </>
  )
}