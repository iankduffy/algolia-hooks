import { Breadcrumbs } from './breadcrumbs'
import { ProductCount } from './product-count'
import { SortBy } from './sort-by'
import { FiltersButton } from './filters-button'
import { CurrentRefinements } from './current-refinements'
import { ProductHits } from './product-hits'

export function AlgoliaPage() {
  return (
    <div className='container px-4 py-6 mx-auto'>
      <Breadcrumbs />
      <div className='flex w-full gap-5'>
        <aside className='hidden lg:block w-3/12 my-4'>
          <div className='border p-4 text-center mb-2'>
            <ProductCount />
            <p className='text-sm'>Filter Your Results</p>
          </div>
          <div>
            Filters
          </div>
        </aside>
        <div className='w-full lg:w-9/12'>
          <h2 className='my-4 lg:mb-2 text-lg font-bold lg:text-2xl'>Category Title</h2>
          <p>Cupidatat commodo dolor do culpa velit consequat incididunt. Magna nostrud id fugiat cillum. Tempor tempor laboris non fugiat dolor proident esse ullamco incididunt nulla aliqua aliquip adipisicing. In cillum consectetur mollit non velit sunt Lorem amet velit ut pariatur quis.</p>
          <div className='flex gap-4 mt-4 lg:justify-between flex-wrap border-b-2 border-gray-100 items-center pb-4'>
            <FiltersButton />
            <SortBy />
            <ProductCount />
          </div>
          <CurrentRefinements />
          <ProductHits />
        </div>
      </div>
    </div>
  )
}