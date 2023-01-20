import React from 'react'
import { NavLink, } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>   <nav className='nav'>
    <div><NavLink to={'/'} className='navlink' >Home</NavLink>
    <NavLink to={'/aboutus'} className='navlink'>About Us</NavLink>
    <NavLink to={'/login'} className='navlink'>Login</NavLink></div>
   
</nav></div>
  )
}

export default Header