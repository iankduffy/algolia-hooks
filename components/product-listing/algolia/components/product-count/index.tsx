
const FAKECOUNT = 50
const FAKETOTAL = 150


export function ProductCount() {
  return (
    <div className='pb-4 border-b-2 border-gray-100'>
      <p className='text-center'>Showing <span className='font-bold'>{FAKECOUNT}</span> of <span className='font-bold'>{FAKETOTAL}</span></p>
    </div>
  )
}