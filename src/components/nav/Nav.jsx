import React from 'react'
import './nav.css'
import LOGO from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { PiEyeClosedBold } from 'react-icons/pi'


const showSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
  sidebar.style.opacity = '1';
}; 

const hideSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
  sidebar.style.opacity = '0';
}; 

const Nav = () => {
  return (
    <div className="nav">
    <div className="container">
      <div class="landing-page">
        <header>
          <div class="container">
            <a href="/" class="logo"><img src={LOGO} alt="logo "/></a>
            <ul class="links">
              <li class="hide-on-mobile"><Link to="/">Home </Link></li>
              <li class="hide-on-mobile"><Link to="/about">Delegates</Link></li>
              <li class="hide-on-mobile"><Link to="/history">Directory</Link></li>
              <li class="hide-on-mobile"><Link to="/info">Preists</Link></li>
              <li class="hide-on-mobile"><Link to="/info">Nuns</Link></li>
              <li class="hide-on-mobile"><Link to="/admissions">Gallery</Link></li>
              <li class="menu-btn" onClick={showSidebar}><Link to="#"><HiOutlineMenuAlt1 /></Link></li>
            </ul>
            <ul class="sidebar">
              <li onClick={hideSidebar}><Link to="#"><PiEyeClosedBold /> </Link></li>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
    </div>
  )
}

export default Nav