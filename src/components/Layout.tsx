import React from 'react'
import { Navbar } from './Navbar'


type Props = {
    children?:React.ReactNode;
}

export const Layout = ({children}:Props) => {
  return (
    <div className='p-0 m-0'>
        <Navbar />
        {children}
    </div>
  )
}
