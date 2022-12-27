import { AlgoliaProvider } from 'components/product-listing/algolia/provider'
import { AlgoliaPage } from 'components/product-listing/algolia/components'

export default function Page() {
  return (
    <main>
      <AlgoliaProvider>
        <AlgoliaPage />
      </AlgoliaProvider>
    </main>
  )
}
