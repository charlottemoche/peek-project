import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
    window.scrollTo(0, 0, 'auto');
  }

  return (
    <>
    <div className="navbar-static">
      <img className="logo" onClick={routeChange} src="./peek-logo.png" alt="" />
      <p className="right-nav">Products</p>
      <p className="right-nav-2">Log In / Sign Up</p>
    </div>
    <div className="mobile-nav">
      <i className="fa fa-bars" styles="font-size: 24px"></i>
    </div>  
    </>
  )
}