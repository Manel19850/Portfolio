import React, { useState } from 'react';
import './contact.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ButtonRetour from './ButtonRetour'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const firestore = getFirestore();
      const messageData = { ...formData };
      await addDoc(collection(firestore, 'messages'), messageData);

      setFormData({ name: '', email: '', message: '' });
      setMessageSent(true);

      setTimeout(() => setMessageSent(false), 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
    }
  };

  return (
    <div className="contact-wrapper">
       <ButtonRetour /> {/* ← bouton de retour */}
      {/* Bloc rouge "PRENEZ" */}
      <div className="banner-red">
        <h1>PRENEZ</h1>
        <div className="circle-right"></div>
      </div>

      {/* Bloc second "CONTACT" + cercle + formulaire */}
      <div className="banner-alt">
        <div className="banner-header">
          <h1>CONTACT</h1>
          <div className="circle-right"></div>
        </div>

        {messageSent && <div className="success-message">Message envoyé avec succès !</div>}

        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-contact">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
