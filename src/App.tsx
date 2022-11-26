import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Top from './Top'
import Profile from './Profile'
import BlogPast from './BlogPast'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
    <div className="main-page">
      <Header />
        <Routes>
            <Route path="/" element={<Top/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/blogpast" element={<BlogPast/>} />
            {/* <Route element={NotFoundPage} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
