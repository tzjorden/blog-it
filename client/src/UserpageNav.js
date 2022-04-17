import React from 'react'
import { Routes, Route } from "react-router-dom";
import {NavLink} from "react-router-dom"
import Logout from './LogOut';

function UserpageNav() {

    return (
      <nav>
          <NavLink className="navbar" to="/article">Post An Article</NavLink>
          <NavLink className="navbar" to="/favorites">Liked Articles</NavLink>
      </nav>
    )
  }
  
  export default UserpageNav;