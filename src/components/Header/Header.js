import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    let activeStyle = {
        fontSize: '22px',
        color: 'orange',
        fontWeight: 'bold'
      };
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav" to="/shop">Shop</NavLink>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav" to="/service">Service</NavLink>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav" to="/inventory">Inventory</NavLink>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav" to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;