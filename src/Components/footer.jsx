import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <div className='footer-container'> 
      <div className='github'>
        <a href='https://github.com/Manel19850' target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className='linkedin'>
        <a href='https://www.linkedin.com/in/manel-jouini' target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
