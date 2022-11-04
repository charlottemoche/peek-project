import React from 'react'

export const Navigation = () => {
  return (
    <>
    <div className="navbar-static">
      <img className="logo" src="./peek-logo.png" alt="" />
      <p className="right-nav">Products</p>
      <p className="right-nav-2">Log In / Sign Up</p>
    </div>
    <div className="mobile-nav">
      <i className="fa fa-bars" styles="font-size: 24px"></i>
    </div>  
    </>
  )
}
