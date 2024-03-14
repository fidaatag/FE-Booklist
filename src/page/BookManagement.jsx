import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { AddButton, ResetButton } from '../components/Button'
import Form from '../components/Form'
import { Dialog, DialogBody, Spinner } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBookByCategory, GetBooks } from '../redux/BookSlice'


const BookManagement = () => {
  const [showForm, setShowForm] = useState(false)
  const toggleShowForm = () => setShowForm(!showForm)

  const [searchCategory, setSearchCategory] = useState()
  const handleCategoryClick = (e) => {
    const searchValue = JSON.parse(e.target.value)
    setSearchCategory(searchValue)
    dispatch(GetBookByCategory(searchValue.id))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetBooks)
  }, [])

  const MyBooks = useSelector(state => state.books).books

  const handleReset = () => {
    dispatch(GetBooks)
    setSearchCategory()
  }


  return (
    <>

      <Dialog open={showForm} handler={toggleShowForm} className='p-5'>
        <DialogBody className='overflow-scroll h-screen sm:overflow-auto sm:h-fit'>
          <Form title_form={'Add My Book'} />
        </DialogBody>
        {/* <Form title_form={'Add My Book'} /> */}
      </Dialog>

      <div className='flex justify-between items-end'>

        <div className='flex items-center gap-4 mt-10'>
          <h2 className='text-2xl font-bold'>{searchCategory ? `My Book List Is Based On #${searchCategory.category}` : 'List of All Books'}</h2>
          {searchCategory ? <ResetButton onClick={handleReset}/> : ''}
        </div>

        <AddButton children={'Add Book'} onClick={toggleShowForm} />

      </div>

      {/* card */}
      <div className='relative mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {MyBooks.length > 0 ? (
          MyBooks.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              categories={item.categories}
              CategoryButton={handleCategoryClick}
            />
          ))
        ) : (
          <>
            <div className='w-full absolute'>
              <Spinner className="h-8 w-8 mx-auto" />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default BookManagement