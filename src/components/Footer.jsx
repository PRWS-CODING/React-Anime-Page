import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-container">
        <a href="mailto:prwscodingwsc@gmail.com">
          <img src="/My-Logo.svg" alt="My Logo" className="footer-logo" />
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
      <p>
        &copy; {new Date().getFullYear()} All things Anime. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
