import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import F4 from '../../images/Insaid.png'

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    
    <nav className="navbar">
       
      <div className="container">
       
        <div className="menu-icon" onClick={handleShowNavbar}>
        <i className="fa fa-bars"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/">About us</NavLink>
            </li>
            <li>
              <NavLink to="/">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar