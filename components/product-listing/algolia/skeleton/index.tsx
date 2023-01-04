import { ProductHits } from "./product-hits";

export function Skeleton({ }) {
  return (
    <div className="algolia-skeleton">
      <div className='container px-4 py-6 mx-auto'>
        <div className='flex w-full gap-5'>
          <aside className='hidden w-2/12 my-4 lg:block'>
            <div className='p-4 mb-4 text-center border'>
              Loading Product Count
            </div>
            Loading Product Filters
          </aside>
          <div className='w-full lg:w-10/12'>
            <h2 className='my-4 text-lg font-bold lg:mb-2 lg:text-2xl'>Category Title</h2>
            <p>Cupidatat commodo dolor do culpa velit consequat incididunt. Magna nostrud id fugiat cillum. Tempor tempor laboris non fugiat dolor proident esse ullamco incididunt nulla aliqua aliquip adipisicing. In cillum consectetur mollit non velit sunt Lorem amet velit ut pariatur quis.</p>
            <div className='flex flex-wrap items-center gap-4 pb-4 mt-4 border-b-2 border-gray-100 lg:justify-between'>
              <div className='hidden lg:block'>
                Pagination Here
              </div>
            </div>
            <ProductHits />
          </div>
        </div>
      </div>
    </div>
  )
}