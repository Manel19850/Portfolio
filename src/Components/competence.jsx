import React from 'react';
import './competence.css'
import Front from '../Assets/FRONTEND.png'
import Back from '../Assets/BACKEND.png'
import Opti from '../Assets/OPTIMISATION.png'


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
           <img src={Front} alt='competences frontend'></img>
          </div>
          <div className='block22'>
          <img src={Back}alt='competences backend'></img>
          </div>
          <div className='block3'>
          <img src={Opti} alt='competences SEO'></img>
          </div>
        </div>
       <div className='text-competence'>
        <p>De la conception à la mise en ligne, je façonne des sites web complets avec passion et précision!  
          Mon objectif est de donner vie à vos idées en créant des sites web fonctionnels, 
          esthétiques et conviviaux, tout en offrant une expérience utilisateur exceptionnelle.</p>
       </div>
      </div>

        </div>
    )
};


export default Competence;