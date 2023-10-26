import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
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
  
      </form>
    </div>
  );
}

export default Signin;