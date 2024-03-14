import React from 'react'
import { BookSaveIcon } from './Icons'
import { Link } from 'react-router-dom'

const Card = ({ id, title, categories, CategoryButton }) => {
  return (
    <>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <BookSaveIcon className={'w-7 h-7 text-gray-500 dark:text-gray-400'} />
        <Link to={`/${id}`}>
          <h5 className="mt-3 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>

        {/* <div className='flex items-center gap-2'>
                    <BookSaveIcon className={'w-4 h-4 text-gray-500 dark:text-gray-400'} />
                    <p>190 page</p>
                </div>

                <div className='flex items-center gap-2'>
                    <BookSaveIcon className={'w-4 h-4 text-gray-500 dark:text-gray-400'} />
                    <p>Author</p>
                </div>

                <div className='flex items-center gap-2'>
                    <BookSaveIcon className={'w-4 h-4 text-gray-500 dark:text-gray-400'} />
                    <p>Gramedia</p>
                </div>

                <div className='flex items-center gap-2'>
                    <BookSaveIcon className={'w-4 h-4 text-gray-500 dark:text-gray-400'} />
                    <p>20 April 2022</p>
                </div> */}

        {categories ?

          <div className='flex gap-x-4 gap-y-1 flex-wrap mt-4'>
            {categories.map(category => (
              <button
                onClick={CategoryButton}
                value={JSON.stringify({ id: category.id, category: category.category })}
                key={category.id}
                className='border rounded-lg px-1.5 py-0.5 hover:bg-gray-200 text-xs'>
                #{category.category}
              </button>
            ))}
          </div>

          : ''}


      </div>


    </>
  )
}

export default Card