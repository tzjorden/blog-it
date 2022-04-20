import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import { useNavigate} from 'react-router-dom';


function Logout({user, setUser}) {

  let navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

  return (
    <div>
     <nav className="navbar">
        <NavLink onClick={handleLogoutClick} to="/">Logout</NavLink>
    </nav>
    </div>
  )
}

export default Logout;