'use client'
import { BaseHit } from "instantsearch.js";
import { ProductHit } from "./hit";
import { UseHitsProps, useHits } from 'react-instantsearch-hooks-web';

export function ProductHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props);
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6'>
      {hits.map((product, index) => <ProductHit product={product} index={index} key={product.objectID} />)}
    </section>
  )
}