import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from './Top'
import Profile from './Profile'

const App = (): ReactElement => {
// const App = (): ReactElement => {
  return (
    <BrowserRouter>
    <div className="main-page">
        <Routes>
            <Route path="/" element={<Top/>} />
            <Route path="/profile" element={<Profile/>} />
            {/* <Route path="/github" component={Github} />
            <Route path="/linkedin" component={LinkedIn} />
            <Route path="/twitter" component={Twitter} />
            <Route path="/blog" component={Blog} />
            <Route component={NotFoundPage} /> */}
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
