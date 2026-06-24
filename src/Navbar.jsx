import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="mailto:prwscodingwsc@gmail.com">
          <img src="/My-Logo.svg" alt="My Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="mailto:prwscodingwsc@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
