
interface Props {
  children: React.ReactNode
}

export function AlgoliaProvider({children}: Props) {
  return (
    <div>
      {children}
    </div>
  )
}