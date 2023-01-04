import { ProductHit } from "./hit";

export function ProductHits() : JSX.Element {
  const hits = [...Array(32).keys()]
  return (
    <section className='grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:grid-cols-4'>
      {hits.map((product, key={}) => <ProductHit key={key} />)}
    </section>
  )
}