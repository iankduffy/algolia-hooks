'use client'
import { useCurrentRefinements } from "react-instantsearch-hooks-web"
const TEMPREFINEMENTS = ['mens', 'sweaters', 'red']

// const transformItems = () => {
//   re
// }

export function CurrentRefinements() {
  const { items, canRefine, refine } = useCurrentRefinements()

  console.log({items})

  return (
    <details className='border-b-2 border-gray-100 py-2 text-sm text-center lg:text-base'>
      <summary>Current Refinement</summary>
      <div className='flex gap-2 my-2 justify-center lg:my-4'>
        {TEMPREFINEMENTS.map((item, key) => {
          return (
            <div key={key} className='pl-2 border rounded-full flex items-center overflow-hidden gap-2'>
              {item} <button className='py-1 px-2 bg-slate-50'>X</button>
            </div>
          )
        })}
      </div>
    </details>
  )
}