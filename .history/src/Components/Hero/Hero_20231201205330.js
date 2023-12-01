import React from 'react'
import './style.css'
const Hero = () => {
  return (
    <>
    <div className='container1'>
    <div className='container d-flex'>
    <div className='container1_left' >
    <img src='/images/banner-1.png' width='100%' height='100%' />
    </div>
    <div className='container1_right'> 
    <img src='/images/banner-2.png' />
    <img src='/images/banner-3.png' className='container1_right_img2' />
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero