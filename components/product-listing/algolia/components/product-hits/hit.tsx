/* eslint-disable @next/next/no-img-element */
import { BaseHit } from "instantsearch.js";

interface Props {
  product: BaseHit
  index: number
}

export function ProductHit({product, index} : Props) {
  const { product_title = '', product_thumbnail, brand, price } = product

  return (
    <div className='cursor-pointer'>
      <img 
        src={product_thumbnail as string} 
        alt={product_title as string} 
        width='564' 
        height='564' 
        fetchpriority={index <= 4 ? 'high' : 'low'}
        loading={index <= 4 ? 'eager' : 'lazy'}
      />
      <div className='mt-4'>
        <p className='text-xs text-indigo-500'>{brand as string}</p>
        <h5 className='text-lg font-medium'>{product_title as string}</h5>
        <p className='text-lg font-bold'>£10.00</p>
      </div>
    </div>
  )
}