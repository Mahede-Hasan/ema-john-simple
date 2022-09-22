import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth);
  let activeStyle = {
    fontSize: '22px',
    color: 'orange',
    fontWeight: 'bold'
  };

  const handleLogout = () => {
    signOut(auth);
  }
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div className=''>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } className="nav" to="/shop">Shop</NavLink>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } className="nav" to="/service">Order</NavLink>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } className="nav" to="/inventory">Inventory</NavLink>
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } className="nav" to="/about">About</NavLink>
        {
          user ?
            <button onClick={handleLogout} className='sign-out'>Sign Out</button>
            :
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav" to="/login">Login</NavLink>
        }
      </div>
    </nav>
  );
};

export default Header;