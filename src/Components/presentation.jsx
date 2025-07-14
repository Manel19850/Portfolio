import React from 'react';
import './presentation.css';
import photo_cv from '../Assets/photo_cv.jpg';
import ButtonRetour from './ButtonRetour'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiGithub
} from 'react-icons/fi';


const softwareSkills = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'SEO', logo: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' }
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <ButtonRetour/>

      <div className="about-block">
        {/* Colonne gauche */}
        <div className="about-left">
          <div className="photo-wrapper">
            <div className="graphic-background"></div>
            <img src={photo_cv} alt="Manel" className="profile-image" /></div>

          <p><FiMapPin className="icon" /> LYON, France</p>
          <p><FiPhone className="icon" /> 06 XX XX XX XX</p>
          <p><FiMail className="icon" /> mj.webdesign@outlook.com</p>
          <p><FiLinkedin className="icon" /> <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><FiGithub className="icon" /> <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>

        {/* Colonne droite */}
        <div className="about-right" id="presentation">
          <p className="intro">
            Ancienne assistante de direction puis RH, j’ai découvert le développement web en startup, aux côtés d’une équipe IT qui avait créé un outil simple mais très efficace pour digitaliser les documents administratifs. 
            Cette expérience m’a donné envie de me former et de créer à mon tour des solutions utiles et bien pensées.
            Aujourd’hui, je conçois des projets web centrés sur l’expérience utilisateur, avec une approche pratique, curieuse et toujours en apprentissage.
          </p>

          <div className="right-subblocks">
            <div className="soft-skills">
              <h2>Soft Skills</h2>
              <ul>
                <li>Communication</li>
                <li>Autonomie</li>
                <li>Gestion de projet</li>
                <li>Esprit d'équipe</li>
              </ul>
            </div>
            <div className="diplomas">
              <h2>Diplômes</h2>
              <ul>
                <li>Développeur Web - OpenClassrooms</li>
                <li>Master RH - IGS</li>
                <li>BTS Assistante de direction - Ifocop</li>
              </ul>
            </div>
          </div>

          <div className="software-skills">
            <h2>Software Skills</h2>
            <div className="skills-logos">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
