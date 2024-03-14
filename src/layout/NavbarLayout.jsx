import React from 'react'
import { Link } from 'react-router-dom'



const NavbarLayout = () => {
  return (
    <>
      <nav className='bg-white shadow-md fixed top-0 z-50 w-full'>
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            <Link to={'/'}>
              <div className='flex gap-1 items-center'>
                {/* 
              <div className='sm:hidden'>
                <MenuButton />
              </div> 
              */}
                <h1 className='text-3xl'>🧭</h1>
                <h1 className='text-2xl font-bold'>Booklist</h1>
              </div>
            </Link>

            <ul className='flex gap-4'>

              <li>
                <Link to={'/'} className='border border-gray-300 rounded-md px-4 py-1 text-gray-600 text-sm items-center cursor-pointer hover:bg-gray-100'>
                  My Book
                </Link>
              </li>

              <li>
                <Link to={'/setup'} className='border border-gray-300 rounded-md px-4 py-1 text-gray-600 text-sm items-center cursor-pointer hover:bg-gray-100'>
                  Setup
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarLayout