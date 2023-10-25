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
           <img src={Front}></img>
          </div>
          <div className='block22'>
          <img src={Back}></img>
          </div>
          <div className='block3'>
          <img src={Opti}></img>
          </div>
        </div>
      </div>

        </div>
    )
};


export default Competence;