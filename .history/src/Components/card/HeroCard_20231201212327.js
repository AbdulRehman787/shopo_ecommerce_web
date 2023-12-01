import React from 'react'

const data=[
    {
        img:"/images/shopping-cart.png",
        head:'Free Shipping',
        desc:"When ordering over $100"
    },
    {
        img:"/images/shopping-cart.png",
        head:'Free Return',
        desc:"Get Return within 30 days"
    },
    {
        img:"/images/shopping-cart.png",
        head:'Free Shipping',
        desc:"When ordering over $100"
    },
    {
        img:"/images/shopping-cart.png",
        head:'Free Shipping',
        desc:"When ordering over $100"
    },
]

const HeroCard = () => {
  return (
  <>
  <div className='container'>
  <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
</div>
  </>
  )
}

export default HeroCard