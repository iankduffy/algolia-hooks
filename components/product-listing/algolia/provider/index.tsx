'use client'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web'
import { Configure } from 'react-instantsearch-hooks-web'
import { history } from 'instantsearch.js/es/lib/routers'

interface Props {
  children: React.ReactNode
}

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ID as string, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string)

export function AlgoliaProvider({children}: Props) {
  return (
      <InstantSearch 
        searchClient={searchClient} 
        indexName="dev_hook_side_project"
        routing={true}
      >
        <Configure hitsPerPage={8}/>
        {children}
      </InstantSearch>
  )
}