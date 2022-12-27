
export function ProductHit() {
  return (
    <div className='cursor-pointer'>
      <img src='https://source.unsplash.com/random/564x564/?golf' alt='product title' width='564' height='564'/>
      <div className='mt-4'>
        <p className='text-xs text-indigo-500'>Product Category</p>
        <h5 className='text-lg font-medium'>Product Title</h5>
        <p className='text-lg font-bold'>£10.00</p>
      </div>
    </div>
  )
}