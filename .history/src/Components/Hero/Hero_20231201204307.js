import React from 'react'
import './style.css'
const Hero = () => {
  return (
    <>
    <div className='container'>
    <div className='container1 d-flex'>
    <div >
    <img src='/images/banner-1.png'  />
    </div>
    <div className='container1_right'> 
    <img src='/images/banner-2.png' />
    <img src='/images/banner-3.png' style={{marginTop: 10px}} />
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero