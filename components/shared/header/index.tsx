

export function Header() {
  return (
    <header className='border-b-2 border-gray-100'>
      <div className='container px-4 py-6 flex mx-auto justify-between items-center'>
        <h1 className='text-lg font-bold order-2 lg:order-1'>Algolia Store</h1>
        <div className='lg:order-2'>Category Nav</div>
        <div className='order-3'>Buttons</div>
      </div>
    </header>
  )
}