import { ProductHit } from "./hit";

export function ProductHits() {
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6'>
      <ProductHit />
      <ProductHit />
      <ProductHit />
      <ProductHit />
      <ProductHit />
      <ProductHit />
    </section>
  )
}