import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import BookManagement from './page/BookManagement'
import BookDetail from './page/BookDetail'
import Setup from './page/Setup'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<BookManagement />} />
            <Route path='/:id' element={<BookDetail />} />
            <Route path='/setup' element={<Setup />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App