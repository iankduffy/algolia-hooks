/* eslint-disable @next/next/no-img-element */
import { BaseHit } from "instantsearch.js";
import { useInstantSearch } from "react-instantsearch-hooks-web";

interface Props {
  product: BaseHit
  index: number
}

// Todo: Make sure we always get same algolia image back and add srcset
export function ProductHit({product, index} : Props) {
  const { results } = useInstantSearch()
  const { product_title = '', product_thumbnail, brand, price } = product

  console.log({results})
  // if (status === 'loading') return <h1>Idle</h1>
  return (
    <div className='cursor-pointer'>
      <img 
        src={product_thumbnail as string} 
        alt={product_title as string} 
        width='564' 
        height='564' 
        fetchpriority={index <= 4 ? 'high' : 'low'}
        loading={index <= 4 ? 'eager' : 'lazy'}
        className='bg-gray-200'
        sizes='20vw'
      />
      <div className='mt-4'>
        <p className='text-xs text-indigo-500'>{brand as string}</p>
        <h5 className='text-lg font-medium'>{product_title as string}</h5>
        <p className='text-lg font-bold'>{`£${price}`}</p>
      </div>
    </div>
  )
}