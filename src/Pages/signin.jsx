import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './sign.css'


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Erreur');
      });
  }

  const resetPassword = () => {
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email de réinitialisation du mot de passe envoyé avec succès');
        window.alert('Un email de réinitialisation du mot de passe a été envoyé à votre adresse.');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Erreur');
      });
  }

  return (
    <div className='sign-container'>
      <form className='auth-block' onSubmit={signin}>
        <h1>Connexion</h1>
        <input
          className='email'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='password'
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="" className='reset-password' onClick={resetPassword}>
          Mot de passe oublié ? Réinitialiser
        </a>
        <button className='sign' type='submit'>Se connecter</button>
      </form>
    </div>
  );
}

export default Signin;