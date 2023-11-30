import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
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
        name:"HomePage",
        link:"/"
    },
    {
        name:"Shop",
        link:"/shop"
    },
    {
        name:"Pages",
    },
    {
        name:"About",
        link:"/aboutus"

    },
    {
        name:"Blog",
        link:"/blog"
    },
    {
        name:"Contact",
        link:"/contact"
    },
]

const categoriesapi=[
    {
        name:"Mobile & Laptop"
    },
    {
        name:"Gaming  & Entertainment"
    },
    {
        name:"Image  & Video"
    },   {
        name:"Vechiles"
    },   {
        name:"Furtniure"
    },   {
        name:"Sport"
    },   {
        name:"Food & Drink"
    },
    {
        name:"Fashion & Accessoriess"
    },
    {
        name:"Toilet & Sanitation"
    },
    {
        name:"Makeup  Corner"
    },
    {
        name:"Baby Items"
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
                            <Link class="nav-link" href="#">
                                <i class="fa fa-shopping-cart"></i><sup className='btns1'>0</sup>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">
                                <i class="fa fa-heart"></i>  <sup className='btns1'>0</sup>
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user"></i> 
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        
{profiledropdown.map((curelem,index)=>{
    return(
        <li><Link class="dropdown-item" href="#"><i className={curelem.icon}></i> {curelem.name}</Link></li>
                       
    )
})}                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="navcontainer">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <Link class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
            <img src="/images/logo.svg" alt="" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
               <div class="dropdown">
                <div class="btns btn-secondary btn2 dropdown-toggle" type="hover" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             <i className='fa fa-list iconall' ><span style={{marginLeft: 20}}>All Categories</span></i> 
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                 {categoriesapi.map((curelem,index)=>{
                    return(
                        <>
                        <li><Link class="dropdown-item" href={''}>{curelem.name}</Link></li>
                        </>
                    )
                 })} 
                </ul>
              </div>
            </li>
            

            {
                navapi.map((curelem,index)=>{
                    return(
                        <>
                        <li class="nav-item">
                        <Link class="nav-link navlink" href="#">{curelem.name}</Link>
                    </li>
                        </>
                    )
                })
            }
                </ul>
            </div>
        </div>
    </nav>
    </div>
</div>
    
    </>
  )
}

export default Navbar