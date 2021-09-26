

import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../models/Pokeball.png'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-fixed red"   >
                <div className="nav-wrapper"   >
                    <Link to="/" className="brand-logo">
                            <img src={Pokeball} style={{width: '45px', margin: '10px'}}/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

