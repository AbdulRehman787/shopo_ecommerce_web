import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog'
import Contact from './Pages/Contact';
const App = () => {
  return (
  
    <BrowserRouter>
    <Routes >
    <Route  path='/' element={<Home />} />
    <Route  path='/aboutus' element={<AboutUs />} />
    <Route  path='/blog' element={<Blog />} />
    <Route  path='/contact' element={<Contact />} />
   
    </Routes>
    </BrowserRouter>
  )
}

export default App