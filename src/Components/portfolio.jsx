import React from 'react';
import './portfolio.css';
import Navbar from './navbar';
import ButtonRetour from './ButtonRetour'


function Portfolio() {
  return (
    <div>
    <ButtonRetour /> {/* ← bouton de retour */}
    <div id="accueil">
      
      <div className='box1'></div>
     
      <div className='container-intro'>
        <div className='intro'>
          <p id="typing-text">
            <br />
            <span>Bienvenue sur mon portfolio!</span>
            <br />
            <span>Découvrez mes projets!</span>
          </p>
        </div>
        <Navbar/>
      </div>

      <div className='animation-aera'>
        <ul className='box-area'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Portfolio;
