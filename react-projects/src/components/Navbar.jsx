import React from 'react'
import svg from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={svg} alt='logo'></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/projects'><li>Projects</li></NavLink>
            <NavLink to='/contacts'><li>Contacts</li></NavLink>
        </ul>
        <button>Get Started</button>
    </div>
  )
}
