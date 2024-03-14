import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);

    // const [inputField, setInputField] = useState({
    //     category: []
    // })

    // const [newValue, setNewValue] = useState('')
    // const [newValue2, setNewValue2] = useState('')

    // const handleChange = (e) => {

    //     const { value, checked } = e.target
    //     const { category } = inputField


    //     if (checked) {

    //         setInputField({
    //             category: [...category, value]
    //         })

    //     } else {

    //         setInputField({
    //             category: category.filter(
    //                 (e) => e !== value
    //             )
    //         })

    //     }
    // }

    // console.log(inputField)
    // console.log(newValue)


    return (
        <>


            {/* <form action="">
                <input type='checkbox' id='1' name='1' value='1' onChange={handleChange} />
                <label htmlFor="1"> value 1</label> <br />


                <input type='checkbox' id='2' name='2' value={newValue} onChange={handleChange} />
                <label htmlFor="" className='ml-1'>

                    <input type="text"  onChange={(e) => setNewValue(e.target.value)} />

                </label><br />

                <input type='checkbox' id='3' name='3' value={newValue2} onChange={handleChange} />
                <label htmlFor="" className='ml-1'>

                    <input type="text"  onChange={(e) => setNewValue2(e.target.value)} />

                </label><br />

            </form> */}




            {/* <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <h2 className="text-2xl font-medium mb-4">Add My Book</h2>
                <form>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 font-medium mb-2">Title</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-gray-900" required />
                    </div>
                    <div className="mb-4">
                        <label for="age" className="block text-gray-700 font-medium mb-2">Age</label>
                        <input type="number" id="age" name="age"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-gray-900" required />
                    </div>
                    <div className="mb-4">
                        <label for="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                        <select id="gender" name="gender"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-gray-900" required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">What is your favorite color?</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/3">
                                <label for="color-red" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="color-red" name="color" value="red" className="mr-2" />Red
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label for="color-blue" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="color-blue" name="color" value="blue" className="mr-2" />Blue
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label for="color-green" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="color-green" name="color" value="green" className="mr-2" />Green
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">What is your favorite animal?</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/3">
                                <label for="animal-cat" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-cat" name="animal[]" value="cat" className="mr-2" />Cat
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label for="animal-dog" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-dog" name="animal[]" value="dog"
                                        className="mr-2" />Dog
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label for="animal-bird" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-bird" name="animal[]" value="bird" className="mr-2" />Bird
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label for="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea id="message" name="message"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-gray-900" rows="5"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>

                </form>
            </div> */}

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="title" {...register} />
                <input type="text" placeholder="author" {...register("author", {})} />
                <input type="datetime-local" placeholder="pub_date" {...register("pub_date", {})} />
                <input type="text" placeholder="publisher" {...register("publisher", {})} />
                <input type="number" placeholder="number_page" {...register("number_page", {})} />
                <input type="checkbox" placeholder="categories_name" {...register("categories_name", {})} />

                <input type="submit" />
            </form> */}



        </>
    )
}

export default Form