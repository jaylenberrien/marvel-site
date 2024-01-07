import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
        <>
            <div class="nav-bar" >
                <div class="nav-title">Marvel Site</div>
                <Link to="/">
                    <div class="nav-content">Home</div>
                </Link>
                <div class="nav-content">Characters</div>
                <div class="nav-content"> 
                    <div class="sub-container"> 
                        <div class="sub-target">Search</div> 
                        <div class="sub-menu">
                            <div class="sub-content">Character Search</div>
                            <div class="sub-content">Comic Search</div>
                            <div class="sub-content">Series Search</div>
                        </div>
                    </div>
                </div> 
                <Link to="/about">
                    <div class="nav-content"> About</div>
                </Link>
            </div>
        </>
    )
}

export default Nav