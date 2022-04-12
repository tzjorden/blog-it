import React from 'react'
import {NavLink} from "react-router-dom"
import Logout from './Logout';

function UserpageNav() {

    return (
      <nav className="navbar">
          <NavLink to="/article">Post An Article</NavLink>
          <NavLink to="/favorites">Liked Articles</NavLink>
          <Logout/>
      </nav>
    )
  }
  
  export default UserpageNav;