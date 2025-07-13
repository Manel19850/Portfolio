import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './ButtonRetour.css';

function ButtonRetour() {
  return (
    <Link to="/" className="button-retour">
      <FaHome />
    </Link>
  );
}

export default ButtonRetour;
