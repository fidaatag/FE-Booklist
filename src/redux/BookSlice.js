import { createSlice } from "@reduxjs/toolkit";
import { BOOK, BOOKCATEGORY, BOOKID } from "./API";

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    message: ''
  },

  reducers: {
    responMessage(state, actions) {
      state.message = actions.payload
    },

    responGetBook(state, actions) {
      state.books = actions.payload
    }
  }
})

export default BookSlice.reducer
export const { responMessage, responGetBook } = BookSlice.actions

export const CreateBook = (newBook) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(BOOK, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook)
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

export const GetBooks = async (dispatch) => {
  try {
    const fecthAPI = await fetch(BOOK)
    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responGetBook(respon.data))

  } catch (error) {
    console.log(error)
    alert('There is a problem with the API - Please contact admin')
  }
}

export const GetBookById = (id) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(BOOKID(id))
    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responGetBook(respon.data))

  } catch (error) {
    console.log(error)
    alert('There is a problem with the API - Please contact admin')
  }
}

export const GetBookByCategory = (id) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(BOOKCATEGORY(id))
    const responAPI = await fecthAPI.json()
    const responAPIParse = JSON.stringify(responAPI)
    const respon = JSON.parse(responAPIParse)

    dispatch(responGetBook(respon.data))

  } catch (error) {
    console.log(error)
    alert('There is a problem with the API - Please contact admin')
  }
}

export const UpdateBook = (bodyReq, id) => {
  return async (dispatch) => {
    try {
      const fecthAPI = await fetch(BOOKID(id), {
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

export const DeleteBook = (id) => async (dispatch) => {
  try {
    const fecthAPI = await fetch(BOOKID(id), {
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