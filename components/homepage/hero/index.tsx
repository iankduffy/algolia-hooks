import Image from "next/image"
import Link from "next/link"

// Todo: Get Random Product Page
// Todo: Improve the text and image
export function Hero(): JSX.Element {
  return (
    <section className='container px-2 mx-auto my-20 text-center'>
      <h2 className='py-6 text-6xl font-bold'>
        Algolia Search Project Build in NextJS 13, Typescript and Algolia
      </h2>
      <p className='text-lg'>View a random product listing page, checkout the github code below, or use the navigation to go to a page:</p>
      <div className='flex justify-center gap-6 my-6'>
        <Link href='/shop/mens' className='px-4 py-2 transition duration-500 border rounded-full hover:bg-slate-100'>
          Random Page
        </Link>
        <Link href='https://github.com/iankduffy/algolia-hooks' target='_blank' className='px-4 py-2 text-white transition duration-500 rounded-full bg-zinc-800 hover:bg-zinc-700'>
          Github Repo
        </Link>
      </div>
      <Link href='#how-it-done' className='block px-4 py-2 mb-6'>
        Scroll Down To See How It Built
      </Link>
      <Image src={"/temp-screenshot.png"} alt={"Image of the Algolia Page"} width='2632' height='1594' className='w-11/12 px-4 mx-auto border-2 rounded-lg lg:w-8/12' loading="eager" />
    </section>
  )
}