import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';
import Cart from '../Cart';

import './navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <div className="nav">
                    <NavLink to="/" exact>
                        home
                    </NavLink>
                    <NavLink to="/catalog">catalog</NavLink>
                    <NavLink to="/cart">cart</NavLink>
                </div>
                <Cart />
            </div>
        </nav>
    );
}

export default Navbar;
