import { Dialog, Input, Spinner } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { TriangleIcon } from '../components/Icons'
import { AddButton, BgBlackButton, BgWhiteButton, DeleteButton, EditButton } from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CreateCategories, DeleteCategory, GetCategories, UpdateCategory } from '../redux/CategorySlice'
import CreatableSelect from 'react-select/creatable'

const Setup = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [editData, setEditData] = useState([])
  const handleOpenDialog = (e) => {
    setEditData(e)
    setOpenDialog(!openDialog)
  }

  const [openDialogDelete, setOpenDialogDelete] = useState(false)
  const handleOpenDialogDelete = () => {
    setOpenDialog(false)
    setOpenDialogDelete(!openDialogDelete)
  }

  const dispatch = useDispatch()

  const AllCategory = useSelector(state => state.category).categories

  useEffect(() => {
    dispatch(GetCategories)
  }, [AllCategory])


  const [editValue, setEditValue] = useState({
    category: ''
  })

  const handleEdit = () => {
    // console.log(editValue);
    // console.log(editData.id);
    dispatch(UpdateCategory(editValue, editData.id))
    setOpenDialog(false)
  }

  const handleDelete = () => {
    dispatch(DeleteCategory(editData.id))
    setOpenDialogDelete(false)
  }

  const [addValue, setAddValue] = useState({
    categories_name: []
  })

  const [openDialogAdd, setOpenDialogAdd] = useState(false)
  const handleOpenDialogAdd = () => setOpenDialogAdd(!openDialogAdd)
  const handleAdd = () => {
    dispatch(CreateCategories(addValue))
    setOpenDialogAdd(false)
  }


  return (
    <>

      <Dialog open={openDialog} handler={handleOpenDialog} size='xs' className='p-10'>
        <Input label="category" size="md" defaultValue={editData.category} onChange={(e) => setEditValue({ category: e.target.value })} />
        <div className='flex gap-x-4 justify-end mt-8'>
          <DeleteButton children={'delete'} onClick={handleOpenDialogDelete} />
          <EditButton children={'edit'} onClick={handleEdit} />
        </div>
      </Dialog>

      <Dialog open={openDialogDelete} handler={handleOpenDialogDelete} size='md' className='p-10'>
        <h5 className='text-xl font-semibold'>Are you sure you want to delete the <span className='font-bold text-red-500'>{editData.category}</span> category?</h5>
        <p>deleting the <span className='font-bold text-red-500'>{editData.category}</span> category will not delete books in this category</p>
        <div className='flex gap-x-4 justify-end mt-8'>
          <BgWhiteButton children={'Yes'} onClick={handleDelete} />
          <BgBlackButton children={'No'} onClick={handleOpenDialogDelete} />
        </div>
      </Dialog>

      <Dialog open={openDialogAdd} handler={handleOpenDialogAdd} className='p-10'>
        <CreatableSelect
          components={{ DropdownIndicator: null }}
          isMulti
          isClearable
          onChange={(e) => setAddValue({ categories_name: e.map(option => option.value) })}
        />
        <div className='flex justify-end'>
          <AddButton children={'Add Category'} onClick={handleAdd} />
        </div>
      </Dialog>

      <div className='flex justify-between items-end w-full pt-10'>
        <h2 className='text-2xl font-bold'>List of Categories</h2>
        <AddButton children={'Add Category'} onClick={handleOpenDialogAdd} />
      </div>


      {
        AllCategory.length > 0 ? (
          AllCategory.map((item) => (
            <div key={item.id} className='relative w-full overflow-hidden top-5 mt-5'>

              <input type="checkbox" className='absolute top-0 left-2 w-1/5 h-12 opacity-0 z-10 cursor-pointer peer' />

              <div className='absolute top-3.5 left-3 transition-transform duration-100 rotate-0 peer-checked:rotate-90'>
                <TriangleIcon className={'h-4 w-4'} />
              </div>

              <div className='h-12 w-full pl-4 flex items-center justify-between gap-4 border-b-2'>
                <h1 className='ml-5 text-lg font-semibold'>#{item.category}</h1>
                <EditButton onClick={() => handleOpenDialog(item)} />
              </div>

              <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-fit'>
                <div className='p-4'>
                  <div className='grid md:grid-cols-5 gap-10'>
                    {item.books.length > 0 ?
                      item.books.map((book) => (
                        <Card
                          key={book.id}
                          id={book.id}
                          title={book.title}
                        />
                      ))
                      : <p className='text-sm text-gray-600 italic ml-4'>there are no books here</p>
                    }
                  </div>
                </div>
              </div>

            </div>
          ))
        ) : (
          <>
            <div className='w-full absolute'>
              <Spinner className="h-8 w-8 mx-auto" />
            </div>
          </>
        )
      }



    </>
  )
}

export default Setup