import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo/WePair7.svg';
import user from '../../image/userIcon.svg';
import AuthButtons from './AuthButtons';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <AuthButtons />
        <img className="user-icon" src={user} alt="user" />
      </div>
    </div>
  );
}
