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
                <Link to="/characters">
                    <div class="nav-content">Characters</div>
                </Link>
                <div class="nav-content" id="sub"> 
                    <div class="sub-container"> 
                        <div class="sub-target">Search</div> 
                        <div class="sub-menu">
                            <Link to="/character-search">
                                <div class="sub-content sub-container">Character Search</div>
                            </Link>
                            <Link to="/comic-search">
                                <div class="sub-content sub-container">Comic Search</div>
                            </Link>
                            <Link to="/series-search">
                                <div class="sub-content sub-container">Series Search</div>
                            </Link>  
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