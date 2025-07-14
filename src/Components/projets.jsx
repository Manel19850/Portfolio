import React from 'react';
import projetData from './data.json';
import './projets.css';
import ButtonRetour from './ButtonRetour'; // 

function Projet() {
  return (
    <section className="projets-section">
      <ButtonRetour /> 
      <div className="projets-header">
        <h1 className="projets-title">PROJETS</h1>
        <hr className="projets-line" />
      </div>
      <div className="cards-container">
        {projetData.map((projet, index) => (
          <div
            key={projet.id}
            className="projet-card"
            onClick={() => window.open(projet.site, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-image">
              <img src={projet.cover} alt={projet.title} />
            </div>
            <div className="card-info">
              <div className="project-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <hr />
              <h2 className="project-title">{projet.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projet;
