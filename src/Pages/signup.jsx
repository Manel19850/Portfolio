import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './sign.css'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/signin');
      })
      .catch((error) => {
        console.error(error);
        window.alert('Veuillez saisir un mot de passe de plus de 6 caractères');
      });
  };

  return (
    <div className='sign-container'>
      <form className='auth-block' onSubmit={signup}>
        <h1>Inscription</h1>
        <input className='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='password'
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='sign' type='submit'>Cliquer</button>
      </form>
    </div>
  );
}

export default Signup;