import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo/WePair7.svg';
import user from '../../image/userIcon.svg';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <div className="navbar-buttons">
          <button className="nav-button" >
            Sign Up
          </button>
          <button className="nav-button" href="">
            Log In
          </button>
        </div>
        <img className="user-icon" src={user} alt="user" />
      </div>
    </div>
  );
}
