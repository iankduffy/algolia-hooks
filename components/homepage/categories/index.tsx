import Image from "next/image"
import Link from "next/link"

const TEMPCAT = [
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
  {
    label: 'Mens',
    link: '/shop/mens'
  },
]

// Todo: Set up real categories 
// Todo: Fix Hover overflow
// Todo: Add Backdrop
export function CategoriesLinks(): JSX.Element {
  return (
    <section className='container grid grid-cols-2 gap-4 px-4 mx-auto lg:grid-cols-4'>
      {TEMPCAT.map((cat, key) => {
        return (
          <Link key={key} href={cat.link} className='relative overflow-hidden'>
            <div className='overflow-hidden'>
            <Image src={`https://source.unsplash.com/random/300x350/?sports&ref={${key}}`} alt={cat.label}              
              width={300}
              height={350}
              className='relative duration-500 hover:scale-105'
            />
            <div className='absolute bottom-0 left-0 w-full p-4 text-xl font-bold text-white'>
              {cat.label}
            </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}