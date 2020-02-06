import React from "react";
import logo from "./image/logo.svg";
import user from "./image/userIcon.svg";

import "./App.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="signing">
        <a className="signUp">Sign Up </a>
        <span> | </span>
        <a className="logIn"> Log In</a>
        <img className="userIcon" src={user} alt="user" />
      </div>
      <div className="logoName">
        <img className="logo" src={logo} alt="logo" />
        <label>
          {" "}
          &lt;We: <span>Pair /&gt;</span>
        </label>
      </div>
    </div>
  );
}
