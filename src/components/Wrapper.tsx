import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div style={{border: "1px solid red"}}>{children}</div>
  )
}

export default Wrapper