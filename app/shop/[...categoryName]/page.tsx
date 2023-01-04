import { AlgoliaProvider } from 'components/product-listing/algolia/provider'
import { AlgoliaPage } from 'components/product-listing/algolia/components'
import { Skeleton } from 'components/product-listing/algolia/skeleton'

export default function Page() {
  return (
    <main >
      <div className='algolia-element'>
        <AlgoliaProvider>
          <AlgoliaPage />
        </AlgoliaProvider>
      </div>
      <Skeleton/>
    </main>
  )
}
