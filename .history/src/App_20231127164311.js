import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
const App = () => {
  return (
  
    <BrowserRouter>
    <Routes >
    <Route  path='/' element={<Home />} />
    <Route  path='/' element={<AboutUs />} />
    <Route  path='/' element={<Home />} />
    <Route  path='/' element={<Home />} />
    <Route  path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App