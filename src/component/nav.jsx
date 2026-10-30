import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='navbar'>
    <link to="/">Home</link>
    <link to="/about">About</link>
    <link to="/service">Services</link>
    <link to="/Contact">Contact</link>
    </nav>
  )
}

export default Navbar