import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable'
import { GetCategories } from '../redux/CategorySlice';
import { CreateBook, UpdateBook } from '../redux/BookSlice';

const Form = ({ title_form, EditData }) => {
  const [inputField, setInputField] = useState({
    title: '',
    author: '',
    pub_date: '2023-12-01',
    publiser: '',
    number_page: 0,
    categories_name: [],
    review: ''
  })

  let optionsSelect = []
  let options_OldData = []

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetCategories)
  }, [])

  useEffect(() => {
    if (EditData) {

      // Format tanggal dari ISO ke format 'yyyy-mm-dd'
      const pub_date_format = new Date(EditData.pub_date).toISOString().split('T')[0]

      setInputField({
        title: EditData.title || '',
        author: EditData.author || '',
        pub_date: pub_date_format || '2023-12-01',
        publiser: EditData.publiser || '',
        number_page: EditData.number_page || 0,
        // categories_name: EditData.categories || [],
        review: EditData.review || '-'
      });

    }
  }, [EditData]);

  EditData?.categories.forEach(category => {
    options_OldData.push({
      value: category.category,
      label: category.category
    })
  })


  const AllCategory = useSelector(state => state.category).categories
  AllCategory.forEach(category => {
    optionsSelect.push({
      value: category.category,
      label: category.category
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputField(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang disubmit
    // console.log(inputField);
    // dispatch(CreateBook(inputField))

    if (!EditData) {
      // console.log('Create');
      const createData = {
        title: inputField.title,
        author: inputField.author,
        pub_date: inputField.pub_date,
        publiser: inputField.publiser,
        number_page: inputField.number_page,
        categories_name: inputField.categories_name,
      };
      dispatch(CreateBook(createData));
      window.location.href = `/`
    } else {
      // console.log('Update');
      dispatch(UpdateBook(inputField, EditData.id))
      window.location.href = `/${EditData.id}`
    }

    // Reset form 
    // setInputField({
    //   title: '',
    //   author: '',
    //   pub_date: '',
    //   publiser: '',
    //   number_page: 0,
    //   categories_name: []
    // });

  };

  // console.log(EditData);


  return (
    <>

      <div className="bg-white border rounded-lg px-8 py-6 mx-4 sm:mx-auto my-4 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4">{title_form}</h2>

        <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-4'>

          <div className="">
            <label htmlFor="title" className="block text-gray-700 font-semibold text-sm mb-0">Title</label>
            <input type="text" name="title" value={inputField.title} onChange={handleChange}
              className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
          </div>

          <div className="">
            <label htmlFor="author" className="block text-gray-700 font-semibold text-sm mb-0">Author</label>
            <input type="text" name="author" value={inputField.author} onChange={handleChange}
              className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
          </div>

          <div className='col-span-2 flex gap-4'>
            <div className="">
              <label htmlFor="number_page" className="block text-gray-700 font-semibold text-sm mb-0">Number Page</label>
              <input type="number" name="number_page" value={inputField.number_page} onChange={handleChange}
                className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
            </div>
            <div className="">
              <label htmlFor="publiser" className="block text-gray-700 font-semibold text-sm mb-0">Publisher</label>
              <input type="text" name="publiser" value={inputField.publiser} onChange={handleChange}
                className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
            </div>
            <div className="">
              <label htmlFor="pub_date" className="block text-gray-700 font-semibold text-sm mb-0">Publisher Date</label>
              <input type="date" name="pub_date" value={inputField.pub_date || '2023-12-01'} onChange={handleChange}
                className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
            </div>
          </div>


          <div className="col-span-2">
            <label htmlFor="categories" className="block text-gray-700 font-semibold text-sm mb-0">Categories</label>
            <CreatableSelect isMulti options={optionsSelect}
              // onChange={(e) => setInputCategories(e)} 
              defaultValue={options_OldData}
              onChange={(e) => setInputField({ ...inputField, categories_name: e.map(option => option.value) })}
            />
          </div>

          {EditData ?

            <div className="col-span-2">
              <label htmlFor="review" className="block text-gray-700 font-semibold text-sm mb-0">Review</label>
              <textarea name="review" value={inputField.review} onChange={handleChange}
                className="border border-gray-300 p-1.5 w-full rounded-sm focus:outline-offset-1 focus:outline-blue-600" required />
            </div>

            : ''}


          <div>
            <button type="submit" className="text-white text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-transparent font-medium rounded-md bg-gray-900 hover:bg-blue-800">Submit</button>
          </div>

        </form>
      </div>

    </>
  )
}

export default Form