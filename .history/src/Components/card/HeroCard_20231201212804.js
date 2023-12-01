import React from 'react'
import './'
const data=[
    {
        img:"/images/shopping-cart.png",
        head:'Free Shipping',
        desc:"When ordering over $100"
    },
    {
        img:"/images/refresh.png",
        head:'Free Return',
        desc:"Get Return within 30 days"
    },
    {
        img:"/images/privacy.png",
        head:'Secure Payment',
        desc:"100% Secure Online Payment"
    },
    {
        img:"/images/trophy.png",
        head:'Best Quality',
        desc:"Original Product Guarenteed"
    },
]

const HeroCard = () => {
  return (
  <>
  <div className='container'>
  <div class="row row-cols-1 row-cols-md-4 g-4">
  {
    data.map((curelem,index)=>{
        return(
            <>
            <div class="col">
    <div class="card card_design">
    <div>
    <img src={curelem.img}  width='30px' />
    </div>
      
      <div>
        <h5 class="card-title">{curelem.head}</h5>
        <p class="card-text">{curelem.desc}</p>
      </div>
    </div>
  </div>
 
            </>
        )
    })
  }
  
 
  
</div>
</div>
  </>
  )
}

export default HeroCard