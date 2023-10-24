import React, { useState, useEffect } from 'react';
import './retourdepage.css';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher le bouton lorsque la page est défilée au-delà d'une certaine position
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='btn-back'
      id="backToTopButton"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
    <i class="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default BackToTopButton;
