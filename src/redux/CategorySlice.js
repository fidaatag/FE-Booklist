import { createSlice } from "@reduxjs/toolkit";
import { CATEGORY, CATEGORYID } from "./API";

const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    message: ''
  },

  reducers: {
    responMessage(state, actions) {
      state.message = actions.payload
    },
    responGetCategory(state, actions) {
      state.categories = actions.payload
    }
  }
})

export default CategorySlice.reducer
export const { responMessage, responGetCategory } = CategorySlice.actions


export const CreateCategories = (newcategory) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(CATEGORY, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newcategory)
    })

    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responMessage(respon.message))

  } catch (error) {
    console.log(error)
    // alert('There is a problem with the API - Please contact admin')
  }
}

export const GetCategories = async (dispatch) => {
  try {
    const fecthAPI = await fetch(CATEGORY)
    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responGetCategory(respon.data))

  } catch (error) {
    console.log(error)
    alert('There is a problem with the API - Please contact admin')
  }
}

export const UpdateCategory = (bodyReq, id) => {
  return async (dispatch) => {
    try {
      const fecthAPI = await fetch(CATEGORYID(id), {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyReq)
      })

      const responAPI = await fecthAPI.json()
      const responAPIParse = JSON.stringify(responAPI)
      const respon = JSON.parse(responAPIParse)

      dispatch(responMessage(respon.message))

    } catch (error) {
      console.log(error)
      // alert('There is a problem with the API - Please contact admin')
    }
  }
}

export const DeleteCategory = (id) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(CATEGORYID(id), {
      method: 'DELETE'
    })

    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responMessage(respon.message))

  } catch (error) {
    console.log(error)
    alert('There is a problem with the API - Please contact admin')
  }
}