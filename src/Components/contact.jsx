import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici le code pour envoyer les données du formulaire vers votre backend
    console.log(formData);

    // Réinitialisez le formulaire en remettant les valeurs par défaut
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Affichez le message de succès
    setMessageSent(true);

    // Réinitialisez le message de succès après quelques secondes
    setTimeout(() => {
      setMessageSent(false);
    }, 5000); // Réinitialisation du message après 5 secondes (vous pouvez ajuster le délai selon vos besoins)
  };

  return (
    <div>
      <div id="contact">
        <div className='contact'>
          <h1> CONTACT</h1>
          <div className='titre'>CONTACTER MOI</div>
        </div>
      </div>
      <div className='contact-container'>
        {messageSent && <div className="success-message">Message envoyé avec succès!</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className='btn-contact' type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
