// Accueil.js
import '../index.css';
import Portfolio from '../Components/portfolio';
import Presentation from '../Components/presentation';
import Projet from '../Components/projets';
import Competence from '../Components/competence';
import Contact from '../Components/contact';
import BackToTopButton from '../Components/retourpage';
import Footer from '../Components/footer';

const Accueil = () => {


  return (
    <div>
      <Portfolio/>
      <Presentation/>
      <Projet/>
      <Contact/>
      <BackToTopButton/>
      <Footer/>
    </div>
  );
};

export default Accueil;
