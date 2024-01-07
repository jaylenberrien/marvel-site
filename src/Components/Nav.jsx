import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
        <div class="nav-bar" >
            <div class="nav-title">Marvel Site</div>
            <Link to="/">
                <div class="nav-content">Home</div>
            </Link>
            <div class="nav-content"> Search</div>
            <Link to="/about">
                <div class="nav-content"> About</div>
            </Link>
        </div>
    )
}

export default Nav