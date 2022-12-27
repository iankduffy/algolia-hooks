
const FAKECOUNT = 50
const FAKETOTAL = 150


export function ProductCount() {
  return (
    <div className='min-w-full lg:min-w-0'>
      <p className='text-center'>Showing <span className='font-bold'>{FAKECOUNT}</span> of <span className='font-bold'>{FAKETOTAL}</span></p>
    </div>
  )
}