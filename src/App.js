import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import {  onAuthStateChanged } from 'firebase/auth';
import Accueil from './Pages/Accueil';
import Dashboard from './Pages/dashboard';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import { auth } from './firebase'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dashboard"element={user ? <Dashboard /> : <Navigate to="/signin" />}  />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
