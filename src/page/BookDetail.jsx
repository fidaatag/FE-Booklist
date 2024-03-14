import React, { useEffect, useState } from 'react'
import { BackButton, BgBlackButton, BgWhiteButton, DeleteButton, EditButton } from '../components/Button'
import { Link, useParams } from 'react-router-dom'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteBook, GetBookById } from '../redux/BookSlice'
import { Dialog, DialogBody } from '@material-tailwind/react'

const BookDetail = () => {
  const [showForm, setShowFrom] = useState(false)
  const toggleShowForm = () => setShowFrom(!showForm)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(GetBookById(params.id))
  }, [])

  const MyBooks = useSelector(state => state.books).books

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }

  const [openDialogDelete, setOpenDialogDelete] = useState(false)
  const handleOpenDialogDelete = () => setOpenDialogDelete(!openDialogDelete)

  const handleDelete = () => {
    setOpenDialogDelete(false)
    dispatch(DeleteBook(params.id))
    setTimeout(() => {
      window.location.href = '/'
    }, 500)
  }



  return (
    <>
      <Dialog open={showForm} handler={toggleShowForm} className='p-5'>
        <DialogBody className='overflow-scroll h-screen sm:overflow-auto sm:h-fit'>
          <Form title_form={'Edit My Book'} EditData={MyBooks} />
        </DialogBody>
      </Dialog>

      <Dialog open={openDialogDelete} handler={handleOpenDialogDelete} size='md' className='p-10'>
        <h5 className='text-xl font-semibold'>Are you sure you want to delete the book <br />
          <span className='italic'>{MyBooks.title}</span> ?</h5>
        <div className='flex gap-x-4 justify-end mt-8'>
          <BgWhiteButton children={'Yes'} onClick={handleDelete} />
          <BgBlackButton children={'No'} onClick={handleOpenDialogDelete} />
        </div>
      </Dialog>

      <Link to={'/'}>
        <BackButton children={'Back'} />
      </Link>

      <h3 className='text-2xl font-semibold mb-1 mt-4'>Book Information</h3>
      <p className='text-sm text-500 mb-5'>Helps you remember the contents of books you like or just store information that seems important</p>


      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Title</h4>
        <p className='text-sm'>{MyBooks.title}</p>
      </div>

      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Author</h4>
        <p className='text-sm'>{MyBooks.author}</p>
      </div>

      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Number Page</h4>
        <p className='text-sm'>{MyBooks.number_page}</p>
      </div>

      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Publisher</h4>
        <p className='text-sm'>{MyBooks.publiser}</p>
      </div>

      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Publish Date</h4>
        <p className='text-sm'>{formatDate(MyBooks.pub_date)}</p>
      </div>

      <div className='flex border-t-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Categories</h4>
        <div className='flex gap-x-4 gap-y-1 flex-wrap mt-4 text-sm'>
          {MyBooks.categories?.map(category => (
            <p key={category.id} className='border rounded-lg px-1.5 py-0.5 hover:bg-gray-200 text-xs cursor-pointer'>#{category.category}</p>
          ))}
        </div>
      </div>

      <div className='flex border-t-2 border-b-2 items-center py-4'>
        <h4 className='text-md font-semibold text-gray-500 w-28 shrink-0'>Review</h4>
        <p className='text-sm'>{MyBooks.review || '-'}</p>
      </div>

      <div className='mt-5 flex gap-4'>
        <DeleteButton children={'Delete'} onClick={handleOpenDialogDelete} />
        <EditButton children={'Edit'} onClick={toggleShowForm} />
      </div>



    </>
  )
}

export default BookDetail