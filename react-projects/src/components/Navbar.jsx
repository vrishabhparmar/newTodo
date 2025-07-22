import React from 'react'
import svg from '../assets/react.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src={svg} alt='logo'></img>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/projects'><li>Projects</li></NavLink>
            <NavLink to='/contacts'><li>Contacts</li></NavLink>
            <NavLink to='/jobs'><li>Career</li></NavLink>

        </ul>
        <button onClick={() => navigate('/projects',{replace:true})}>Get Started</button>
    </div>
  )
}
