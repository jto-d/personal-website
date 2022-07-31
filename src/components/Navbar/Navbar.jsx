import React from 'react'
import { HiMenuAlt4, Hix } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span>J</span>
        
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">


      </div>
    </nav>
  )
}

export default Navbar