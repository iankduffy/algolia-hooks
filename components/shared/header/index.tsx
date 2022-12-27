import Link from "next/link"

export function Header() {
  return (
    <header className='border-b-2 border-gray-100'>
      <div className='container flex items-center justify-between px-4 py-6 mx-auto'>
        <a className='order-2 text-lg font-bold lg:order-1' href='/'>Algolia Store</a>
        <div className='lg:order-2'>Category Nav</div>
        <div className='order-3'>
          <Link href='https://github.com/iankduffy/algolia-hooks' target='_blank' className='px-4 py-2 text-white transition-colors rounded-full bg-zinc-800 hover:bg-zinc-700'>
            <span>Github</span>
          </Link>
        </div>
      </div>
    </header>
  )
}