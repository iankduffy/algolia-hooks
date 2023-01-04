
export function ProductHit({}) {
  return (
    <div className='cursor-pointer'>
      <img 
        src={''} 
        alt={''} 
        width='564' 
        height='564' 
        fetchpriority={''}
        loading={''}
        className='bg-gray-200'
        sizes='20vw'
      />
      <div className='mt-4'>
        <p className='text-xs text-indigo-500'>Brand</p>
        <h5 className='text-lg font-medium'>Product Tile</h5>
        <p className='text-lg font-bold'>Price</p>
      </div>
    </div>
  )
}