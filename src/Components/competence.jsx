import React from 'react';
import './competence.css'


function Competence(){

    return(

        <div>
          <div id="competence">
        <div className='competence'>
          <h1 >
            MES COMPÉTENCES
            <span className="titre-competence">COMPETENCES</span>
          </h1>
        </div>
        <div className='container-comp'>
          <div className='block1'>
            <h2><i className="fa-solid fa-code"></i> Frontend</h2>
            <p>
              En tant que développeur web, j'utilise JavaScript, React JS et Bootstrap pour créer des interfaces web conviviales.
              Je mets un point d'honneur à améliorer l'expérience client en apportant des solutions créatives et évolutives.
              Mon objectif est de fournir des sites web hautement fonctionnels et attrayants, tout en maintenant une approche axée sur la convivialité et l'innovation.
            </p>
          </div>
          <div className='block22'>
            <h2><i className="fa-sharp fa-solid fa-database"></i> Backend</h2>
            <p>
              Je travaille avec Node.js, Express.js et MongoDB pour créer des applications backend solides.
              Je suis familiarisé avec la méthode CRUD pour gérer efficacement les données.
              Mon objectif est de contribuer à la création d'applications backend de qualité qui répondent à vos besoins spécifiques.
            </p>
          </div>
          <div className='block3'>
            <h2><i className="fa-solid fa-bullseye"></i> Optimisation</h2>
            <p>
              Je m'intéresse également au SEO, à l'optimisation et à la performance essentiels pour garantir que les sites web fonctionnent efficacement
              et offrent une expérience utilisateur exceptionnelle.
              L'objectif est d'optimiser les sites pour une meilleure visibilité et des performances accrues, contribuant ainsi à l'atteinte des objectifs en ligne.
            </p>
          </div>
        </div>
      </div>

        </div>
    )
};


export default Competence;