import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png";
const Navbar=()=>{
    return(
      <nav className='container'>
        <img src={logo} alt="" classname="logo"/> 
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="button">Contact</button></li>
        </ul>
      </nav>
    )
}
export default Navbar