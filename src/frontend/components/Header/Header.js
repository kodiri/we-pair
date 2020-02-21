import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo/WePair7.svg';
import user from '../../image/userIcon.svg';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-join">
          <button className="sign-up" >
            Sign Up{" "}
          </button>
          <button className="log-in" href="">
            {" "}
            Log In
          </button>
        </div>
        <img className="user-icon" src={user} alt="user" />
      </div>
      <div className="Header-bottom">
      </div>
    </div>
  );
}
