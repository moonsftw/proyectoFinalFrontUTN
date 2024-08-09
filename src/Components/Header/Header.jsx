import React from 'react'
import {IoMenu, IoClose} from './../../assets/icons';
import "./Header.css"
const Header = (props) => {
  return (
    <header className={`${props.className} container`}>
    <nav className="main-nav">
      <a href="#" className="logo">
        <img src="/modernLogo.svg" alt="" />
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Download
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Why Discord
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Nitro
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Safety
          </a> 
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Support
          </a>
        </li>
      </ul>
      <div className="nav-items-right">
        <a href="#" className="btn-login">
          Open Discord
        </a>
        <span className="mobile-toggle">
          <IoMenu className="btn-open" />
          <IoClose className="btn-close" />
        </span>
      </div>
    </nav>
  </header>
  )
}

export default Header