import React from 'react'
import svg from '../assets/react.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={svg} alt='logo'></img>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/contacts'><li>Contacts</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}
