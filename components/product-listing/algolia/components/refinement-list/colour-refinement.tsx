'use client'
import { RefinementListConnectorParams } from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import { useRefinementList } from "react-instantsearch-hooks-web"

interface Props {
  attribute: RefinementListConnectorParams['attribute']
  title: string
}

// Todo: Colour refinement
export function ColourRefinement(props: Props): JSX.Element | null {
  const { items, refine } = useRefinementList(props)

  if (!items.length) {
    return null
  }

  return (
    <div className='px-4 py-2 mb-4 border'>
      <h4 className='text-lg font-medium'>{props.title}</h4>
      <ul className="grid grid-cols-4 mt-2">
        {items.map((item) => (
          <li key={item.value}>
            <label className='flex flex-col justify-center gap-1 text-center'>
              <span className="w-8 h-8 mx-auto bg-sky-700">

              </span>
              <input
                type='checkbox'
                value={item.value}
                checked={item.isRefined}
                onChange={() => refine(item.value)}
                className='hidden'
              />
              <p>
                <span className='capitalize'>{item.label} </span>
                <span>({item.count})</span>
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}