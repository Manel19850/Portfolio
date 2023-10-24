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
          <p>D'un parcours atypique à une passion unique : Je suis votre développeuse 
            web fraîchement diplômée, prête à fusionner créativité et technologie. Avec un bagage en assistanat de direction et ressources humaines, j'apporte une perspective unique à chaque projet. Ensemble, transformons vos idées en sites web captivants et fonctionnels. Rejoignez-moi pour marier l'innovation au pragmatisme, et façonner le futur de votre présence en ligne.</p>
        </div>
        
      </div>
    </div>
  );   
}

export default Portfolio;
