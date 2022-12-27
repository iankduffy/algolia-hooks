import { Breadcrumbs } from './breadcrumbs'
import { ProductCount } from './product-count'
import { SortBy } from './sort-by'
import { FiltersButton } from './filters-button'
import { CurrentRefinements } from './current-refinements'

export function AlgoliaPage() {
  return (
    <div className='container px-4 py-6 mx-auto'>
      <Breadcrumbs />
      <h2 className='my-4 text-lg font-bold'>Category Title</h2>
      <div className='grid grid-cols-2 gap-4 my-4'>
        <FiltersButton />
        <SortBy />
      </div>
      <ProductCount />
      <CurrentRefinements />
      <div>
        Products
      </div>
      
    </div>
  )
}