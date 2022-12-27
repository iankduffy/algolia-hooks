const FAKEBREADCRUMBS = ['shop', 'mens', 'hoodies']
import Link from "next/link"

// Todo: Add / to all but last
// Todo: Algolia data
export function Breadcrumbs() {
  return (
    <section className='flex'>
      {FAKEBREADCRUMBS.map((breadcrumb, key) => {
        return (
          <Link href={`/${breadcrumb}`} key={key} className='capitalize pr-1'>
            {breadcrumb} /
          </Link>
        )
      })}
    </section>
  )
}