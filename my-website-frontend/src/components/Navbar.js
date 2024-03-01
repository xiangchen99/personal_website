import React from 'react';
import './Navbar.css'; // Add your CSS file if you have one

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;