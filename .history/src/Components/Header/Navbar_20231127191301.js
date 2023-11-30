import React from 'react'
import './style.css'
const profiledropdown=[
    {
        name:"Profile",
        icon:"fa fa-user"
    },
    {
        name:"My Order",
        icon:"fa fa-list"
    },
    {
        name:"My WishList",
        icon:"fa fa-heart"
    },
    {
        name:"My Cart",
        icon:"fa fa-shopping-cart"
    },
    {
        name:"Logout",
        icon:"fa fa-sign-out"
    },
    
]


const navapi=[
    {
        name:"HomePage"
    },
    {
        name:"HomePage"
    },
    {
        name:"HomePage"
    },
    {
        name:"HomePage"
    },
    {
        name:"HomePage"
    },
    {
        name:"HomePage"
    },
]
const Navbar = () => {
  return (
    <>
    <div className='navcontaine'>
    <div className='container '>
    <div class="main-navbar  sticky-top">
    <div class="top-navbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                 <img src="/images/logo.svg" alt="" />
                </div>
                <div class="col-md-5 my-auto">
                    <form role="search">
                        <div class="input-group">
                            <input type="search" placeholder="Search your product" className="form-control inp" />
                            <button class="btns" type="submit">
                               Search
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-md-5 my-auto">
                    <ul class="nav justify-content-end">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-shopping-cart"></i><sup className='btns1'>0</sup>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-heart"></i>  <sup className='btns1'>0</sup>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user"></i> 
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        
{profiledropdown.map((curelem,index)=>{
    return(
        <li><a class="dropdown-item" href="#"><i className={curelem.icon}></i> {curelem.name}</a></li>
                       
    )
})}                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
            <img src="/images/logo.svg" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="#">All Categories</a>
            </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HomePage</a>
                    </li>
                  
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Appliances</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
    </div>
    </div>
    </>
  )
}

export default Navbar