import React from 'react'
import './style.css'

const one1=[
    {
        name: "Account"
    },
    {
        name: "Track Order"
    }, {
        name: "Support"
    }
]
const one2=[
    {
        name: "United State"
    },
    {
        name: "Usd "
    }, {
        name: "Bagla"
    }
]
const Topheader = () => {
  return (
    <>
    <div className='headcont1'>
    <div class="container ">
  <div class="row">
    <div class="col-sm d-flex ">
      {one1.map((curelem,index)=>{
        return (
            <>
            
            <p className='px-3'>{curelem.name}</p>
           
            </>
        )
      })}
    </div>
    <div class="col-sm d-flex sam">
      {one2.map((curelem,index)=>{
        return (
            <>
            
            <p className='px-3 '>{curelem.name}</p>
           
            </>
        )
      })}
    </div>
   
  </div>
</div>
    </>
  )
}

export default Topheader