'use client'
const FAKEBREADCRUMBS = ['shop', 'mens', 'hoodies']
import { BreadcrumbConnectorParams } from "instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb";
import Link from "next/link"
import { useBreadcrumb } from "react-instantsearch-hooks-web"

// Todo: Add / to all but last
// Todo: Algolia data
export function Breadcrumbs(props: BreadcrumbConnectorParams) {
  const {
    items,
  } = useBreadcrumb({
    attributes: [
      'hierarchicalCategories.lvl0',
      'hierarchicalCategories.lvl1',
      'hierarchicalCategories.lvl2',
    ],
    rootPath: 'Shop',
    separator: ' / ',
  });

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