import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Top from './components/Top'
import Profile from './components/Profile'
import Post1 from './components/Post1'
import BlogPast from './components/BlogPast'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
    <div className="main-page">
      <Header />
        <Routes>
            <Route path="/" element={<Top/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/post1" element={<Post1/>} />
            <Route path="/blogpast" element={<BlogPast/>} />
            {/* <Route element={NotFoundPage} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
