import React from 'react';
import './navbar.css';


    
function Navbar() {
  

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#presentation">ABOUT</a><span></span>
        </li>
        <li>
          <a href="#projets">PROJECTS</a><span></span>
        </li>
        <li>
          <a href="#contact">CONTACT</a><span></span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
