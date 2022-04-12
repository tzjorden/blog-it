import React from 'react'
import {NavLink} from "react-router-dom"


function Navbar() {

  return (
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  )
}

export default Navbar;
