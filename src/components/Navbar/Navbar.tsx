import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';
import Cart from '../Cart';
import Search from '../Search';

import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <Search />
                <ul className="nav">
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/" exact>
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/catalog">
                            Каталог
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/cart">
                            Корзина
                        </NavLink>
                    </li>
                </ul>
                <Cart />
            </div>
        </nav>
    );
}

export default Navbar;
