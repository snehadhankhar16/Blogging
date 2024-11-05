import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Author from './Pages/Author'
import AuthorDetails from './Pages/AuthorDetails'
import Privacy from './Pages/Privacy'
import TermsandCondition from './Pages/TermsandCondition'
import Error from './Pages/Error'
import Blog from './Pages/Blog'
import Blogdetails from './Pages/Blogdetails'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import AddBlog from './Admin/AdminPages/AddBlog'
import BlogShow from './Admin/AdminPages/BlogShow'
import MyAccount from './Admin/AdminPages/MyAccount'
import AdminBlogDetail from './Admin/AdminPages/AdminBlogDetail'

const App = () => {
  return (
    <div className='theme-dark'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Author' element={<Author />} />
          <Route path='/AuthorDetails' element={<AuthorDetails />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/TermsandCondition' element={<TermsandCondition />} />
          <Route path='*' element={<Error />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blogdetails' element={<Blogdetails />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/AddBlog' element={<AddBlog />} />
          <Route path='/Blogs' element={<BlogShow />} />
          <Route path='/AdminBlogDetail' element={<AdminBlogDetail />} />
          <Route path='/MyAccount' element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App