import React from 'react'
import {NavLink} from "react-router-dom"


function Navbar() {

  return (
    <nav>
        <NavLink className="navbar" to="/">Home</NavLink>
        <NavLink className="navbar" to="/login">Log In</NavLink>
        <NavLink className="navbar" to="/signup">Sign Up</NavLink>
    </nav>
  )
}

export default Navbar;
