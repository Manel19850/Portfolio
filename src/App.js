import React from 'react';
import './index.css';
import Accueil from './Components/accueil';
import Presentation from './Components/presentation';
import Projet from './Components/projets';
import Competence from './Components/competence'
import Contact from './Components/contact';
import BackToTopButton from './Components/retourpage';

const App = () => {
  return (
    <div>
 
    <Accueil/>
    <Presentation/>
    <Projet/>
    <Competence/>
    <Contact/>
    <BackToTopButton/>
    </div>
  );
};

export default App;
