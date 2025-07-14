import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/presentation">A PROPOS<span className="arrow">|</span></Link>
        </li>
        <li>
          <Link to="/projets">MES PROJETS<span className="arrow">|</span></Link>
        </li>
        <li>
          <Link to="/contact">CONTACT <span className="arrow">|</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
