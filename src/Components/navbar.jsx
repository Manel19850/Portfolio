import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/presentation">ABOUT</Link><span></span>
        </li>
        <li>
          <Link to="/projets">PROJECTS</Link><span></span>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link><span></span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
