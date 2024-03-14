import React from 'react'
import NavbarLayout from './NavbarLayout'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavbarLayout />
      <div className='px-4 sm:px-6 lg:px-8 mt-20'>
        <Outlet />
      </div>

    </>
  )
}

export default Layout