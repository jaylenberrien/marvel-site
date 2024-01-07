import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
        <div>
            <div>Marvel Site</div>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div> About</div>
            </Link>
        </div>
    )
}

export default Nav