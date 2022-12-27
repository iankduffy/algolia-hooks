const TEMPREFINEMENTS = ['mens', 'sweaters', 'red']

export function CurrentRefinements() {
  return (
    <details className='border-b-2 border-gray-100 py-2 text-sm text-center'>
      <summary>Current Refinement</summary>
      <div className='flex gap-2 my-2 justify-center'>
        {TEMPREFINEMENTS.map((item, key) => {
          return (
            <div key={key} className='pl-2 border rounded-full flex items-center overflow-hidden gap-2'>
              {item} <button className='py-1 px-2 bg-slate-50'>X</button>
            </div>
          )
        })}
      </div>
    </details>
  )
}