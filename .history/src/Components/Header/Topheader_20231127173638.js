import React from 'react'
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
    <div class="container">
  <div class="row">
    <div class="col-sm">
      {one1.map((curelem,index)=>{
        return
        (
            <>
            p
            </>
        )
      })}
    </div>
    <div class="col-sm">
      One of three columns
    </div>
   
  </div>
</div>
    </>
  )
}

export default Topheader