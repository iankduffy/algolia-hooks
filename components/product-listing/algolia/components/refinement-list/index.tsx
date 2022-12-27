import { BasicRefinement } from './basic-refinement'
import { ColourRefinement } from './colour-refinement'

export function FiltersList() {

  return (
    <div>
      <BasicRefinement attribute='categories' title='Categories' />
      <BasicRefinement attribute='brand' title='Brand' />
      <BasicRefinement attribute='colour' title='Colour'/>
      <BasicRefinement attribute='available_sizes' title='Available Sizes' />
    </div>
  )
}