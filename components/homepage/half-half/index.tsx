
interface Props {
  children: React.ReactNode,
}

export function HalfHalf ({ children } : Props) {
  return (
    <div className='container flex mx-auto'>
      {children}
    </div>
  )
}