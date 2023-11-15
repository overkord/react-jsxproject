import React from 'react'
import CritoLoggo from '../../assets/images/Crito.svg'
import Button from '../Generics/Button'
import { NavLink, Link } from 'react-router-dom'

// kolla knappen

const Header = () => {
  return (
        <header>
<div className="container">
<button className="btn-menu-bars"><i className="fa-solid fa-bars"></i></button>
<div className="logotype">
<a href="index.html">
  <Link to="/">
<img src={CritoLoggo} alt="" />
</Link>
</a>
</div>
<div className="contact-information-bar">
<div className="content-box">
<i className="fa-sharp fa-light fa-phone-volume"></i>
+46 (8) 121 470 50
</div>
<div className="content-box">
<i className="fa-light fa-envelope"></i>
info@crito.com
</div>
<div className="content-box last">
<i className="fa-thin fa-location-dot"></i>
Sveavägen 31, 111 34 STOCKHOLM
</div>    
</div>
<div className="social-media-bar">
<a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
<a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
<a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
<a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
</div>
<div className="menu">
<nav>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/services">Services</NavLink>
  <NavLink to="/newsandarticles">News</NavLink>
  <NavLink to="/contacts">Contact</NavLink>
</nav>
<Button type="login" title="Login" url="/services"/> 
</div>
</div>
</header>  
)
}

export default Header