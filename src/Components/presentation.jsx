import React from 'react';
import './presentation.css';
import photo_cv from '../Assets/photo_cv.jpg';

function Portfolio() {
  return (
    <div className='container-presentation'>
      <div id="presentation">
        <img src={photo_cv} alt='Manel' className='profile-image' />
        <span className='block'></span>
        <div className='sous-presentation'>
        <div className='block2'></div>
          <h1>À PROPOS DE MOI</h1>
          <p> J’ai découvert le développement web lors de mon expérience en ressources humaines dans une start-up. Je travaillais aux côtés d’une équipe IT qui développait une plateforme pour digitaliser les documents administratifs. Une solution simple, mais qui a vraiment facilité la vie de nombreuses entreprises. C’est là que j’ai compris le pouvoir du web pour créer des outils concrets qui répondent à de vrais besoins.

Animé par cette révélation, je me suis formé sur OpenClassrooms pour acquérir des bases solides : HTML, CSS, React, Node.js, MongoDB… J’ai exploré aussi bien le front-end que le back-end, avec une vraie curiosité pour le design de l’expérience utilisateur et la création de maquettes fonctionnelles.

Ce qui me motive aujourd’hui, c’est de développer des applications utiles, performantes et bien pensées, en m’appuyant sur une compréhension fine des besoins des utilisateurs. Mon parcours m’a également amené à gérer des projets, coordonner des étapes de développement, et garder une vision claire de l’objectif produit tout au long du processus.

Je crois en un développement centré sur la solution : simple, robuste, évolutif, et toujours au service de l’humain</p>
        </div>
        
      </div>
    </div>
  );   
}

export default Portfolio;
