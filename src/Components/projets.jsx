import React from 'react';
import projetData from './data.json';
import './projets.css'


function Projet(){

    return(
<div>
        <div>
        <div id="projets">
          <div className='projet'>
           <h1> PROJET</h1>
           <div className='titre-projet'>PORTFOLIO</div>
           </div>
        </div>
        <div className='container-card'>
        {projetData.map((projet) => (
          <div key={projet.id} className='card'>
            <div className='image-card'>
              <img src={projet.cover} alt={projet.title} />
            </div>
            <div className='content-card'>
              <h2>{projet.title}</h2>
              <p className='sous-titre'>{projet.soustitre}</p>
              <p className='description'>{projet.description}</p>
              <p className='techno'>Technologies utilisées : {projet.langage}</p>
              <button className='btn'>
                <a href={projet.site} target='_blank' rel='noopener noreferrer'>
                  Visitez le site
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
</div>
    )
};


export default Projet;