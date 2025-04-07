import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='logo'>#VanLife</Link>
        <nav className='nav'>
          <Link to='/host' className='header-link'>Dashboard</Link>
          <Link to='/about' className='header-link'>About</Link>
          <Link to='/vans' className='header-link'>Vans</Link>
        </nav>
    </div>
  )
}

export default Header