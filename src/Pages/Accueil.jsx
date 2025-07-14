import React from 'react';
import Navbar from '../Components/navbar';
import './Accueil.css';

function Home() {
  return (
    <div className="container">
      {/* Animation en arrière-plan */}
      <div className="animation-background">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Navbar />

      <main className="main-content">
        <div className="info-box">
          <h1 className="name">Manel JOUINI</h1>
          <p className="job-title">Web Developer & UI/UX Designer</p>
        </div>

        <div className="side-bar">
          <div className="vertical-line"></div>
          <div className="year">2025</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
