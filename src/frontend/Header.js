import React from "react";
import logo from "./image/logo/WePair7.svg";
import user from "./image/userIcon.svg";
import "./App.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-top">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <div className="signing">
          <a className="sign-up" href="">
            Sign Up{" "}
          </a>
          <span> | </span>
          <a className="log-in" href="">
            {" "}
            Log In
          </a>
        </div>
        <img className="user-icon" src={user} alt="user" />
      </div>
      <div className="Header-bottom">
        <h2 className="Header-bottom-sentence">“Request for </h2>
        <h2 className="Header-bottom-sentence">a Pair Programming”</h2>
      </div>
    </div>
  );
}
