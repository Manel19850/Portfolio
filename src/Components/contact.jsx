import React, { useState } from 'react';
import './contact.css'; // Assurez-vous que le fichier CSS est correctement référencé
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Importez les fonctions Firebase nécessaires

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
      const messageData = {
        ...formData,
      };
      await addDoc(collection(firestore, 'messages'), messageData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setMessageSent(true);

      setTimeout(() => {
        setMessageSent(false);
      }, 2000); 
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  return (
    <div>
      <div id="contact">
        <div className='contact'>
          <h1>CONTACT</h1>
          <div className='titre'>CONTACTEZ-MOI</div>
        </div>
      </div>
      {messageSent && <div className="success-message">Message envoyé avec succès!</div>}
      <div className='contact-container'>
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
