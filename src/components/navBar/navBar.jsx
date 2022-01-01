import React from 'react'
import { NavLink } from 'react-router-dom'
import * as icons from '../../assest/svg/menu-icons/menuIcons'
//import PropTypes from 'prop-types';
import './navBar.css'

const NavBar = () => {
  const itemsMenu = [
    { link: '/rent', nameMenu: 'Аренда', icon: icons.iconRent },
    { link: '/jobs', nameMenu: 'Работа', icon: icons.iconJobs },
    { link: '/places', nameMenu: 'Места', icon: icons.iconPlaces },
    { link: '/services', nameMenu: 'Услуги', icon: icons.iconServices },
    { link: '/news', nameMenu: 'Новости', icon: icons.iconNewsPaper },
    { link: '/relocate', nameMenu: 'Релокейт', icon: icons.iconRelocate },
  ]
  return (
    <nav className='menu'>
      <ul className='menu-container'>
        {itemsMenu.map((item, index) => (
          <li key={`menu-${index}`} className='menu-item'>
            <NavLink to={item.link} className='menu-link'>
              {item.icon}
              <span className='menu-link-name'>{item.nameMenu}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

//NavBar.propTypes = {};

export default NavBar
