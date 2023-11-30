import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog'
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import TermsandCondition from './Pages/TermsandCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShopListView from './Pages/ShopListView';
import ShopCategoryicon from './Pages/ShopCategoryicon';
import Shop from './Pages/Shop';
const App = () => {
  return (
  
    <BrowserRouter>
    <Routes >
    <Route  path='/' element={<Home />} />
    <Route  path='/aboutus' element={<AboutUs />} />
    <Route  path='/blog' element={<Blog />} />
    <Route  path='/contact' element={<Contact />} />
    <Route  path='/faq' element={<FAQ />} />
    <Route  path='/privacyPolicy' element={<PrivacyPolicy />} />
    <Route  path='/shopListView' element={<ShopListView />} />
    <Route  path='/shopCategoryicon' element={<ShopCategoryicon />} />
    <Route  path='/' element={<ShopCategoryicon />} />

   
    </Routes>
    </BrowserRouter>
  )
}

export default App