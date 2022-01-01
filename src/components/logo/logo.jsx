import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assest/images/logo-icon.png'
import './logo.css'

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={logo} alt='Rellocate logo' />
      <p className='logo-name'>
        Rellocate<span className='logo-dot'>.</span>
      </p>
    </Link>
  )
}

export default Logo
