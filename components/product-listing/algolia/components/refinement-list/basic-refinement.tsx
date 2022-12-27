'use client'
import { RefinementListConnectorParams } from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import { useRefinementList } from "react-instantsearch-hooks-web"

interface Props {
  attribute: RefinementListConnectorParams['attribute']
  title: string
}

export function BasicRefinement(props: Props): JSX.Element | null {
  const { items, refine } = useRefinementList(props)

  if (!items.length) {
    return null
  }

  return (
    <div className='mb-4 border px-4 py-2'>
      <h4 className='text-lg font-medium'>{props.title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.value}>
            <label className='flex gap-1'>
              <input
                type='checkbox'
                value={item.value}
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span className='capitalize'>{item.label}</span>
              <span>({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}