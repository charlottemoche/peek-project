import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {

  return (
    <>
    <div className="navbar-static">
      <Link to="/">
      <img className="logo" src="./peek-logo.png" alt="" />
      </Link>
      <p className="right-nav">Products</p>
      <p className="right-nav-2">Log In / Sign Up</p>
    </div>
    <div className="mobile-nav">
      <i className="fa fa-bars" styles="font-size: 24px"></i>
    </div>  
    </>
  )
}
