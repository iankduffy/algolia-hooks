import { CategoriesLinks } from 'components/homepage/categories'
import { HalfHalf } from 'components/homepage/half-half'
import { Hero } from 'components/homepage/hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesLinks />
      {/* See how the project is made */}
      <h3 className='container px-4 mx-auto my-6 text-4xl font-bold text-center'>How The Project Built</h3>
      {/* NextJs 13 App Folder and Typescript */}
      <HalfHalf>
        <div>
          <h4>Next JS 13</h4>
          <p>Project built with the currently in Beta Next13 App Stucture and Typescript to build product listing page site found on E-commerce sites.</p>
        </div>
        <div>
          
        </div>
      </HalfHalf>
      {/* Tailwind CSS */}
      {/* Algolia Search Hooks */}
      {/* Loading State if possible */}
      {/* Supabase for page routes? */}
      {/* Performance Stuff */}
    </main>
  )
}
