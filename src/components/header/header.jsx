import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../navBar/navBar'
import './header.css'
import iconLogin from '../../assest/svg/login'
import iconFavorite from '../../assest/svg/favorite'
import Logo from '../logo/logo'
import Burger from '../burger/burger'

const Header = () => {
  return (
    <header className='container header'>
      <Burger />
      <Logo />
      <NavBar />
      <div className='second-nav'>
        {iconFavorite}
        {iconLogin}
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
