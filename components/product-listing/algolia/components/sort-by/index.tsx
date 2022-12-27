'use client'
import { useSortBy } from "react-instantsearch-hooks-web"

// Todo: add other sorts
export function SortBy() {
  const { currentRefinement, options, refine } = useSortBy({
    items: [
      {label: 'Featured', value: 'dev_hook_side_project'}, 
      {label: 'Featured 2', value: 'dev_hook_side_project'}, 
      {label: 'Featured 3', value: 'dev_hook_side_project'}
    ]
  })
  console.log(options)

  return (
    <select className='w-1/2 py-2 px-1 border rounded lg:w-3/12 flex-1 lg:flex-none lg:order-2' onChange={(e) => refine(e.currentTarget.value)}>
      {options.map((option, key) => {
        return (<option value={option.value} key={key} selected={option.value === currentRefinement}>{option.label}</option>)
      })}
    </select>
  )
}