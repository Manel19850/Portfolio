import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import Accueil from './Pages/Accueil';
import Dashboard from './Pages/dashboard';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import { auth } from './firebase';

// Import des composants à rendre comme pages
import Portfolio from './Components/portfolio';
import Presentation from './Components/presentation';
import Projet from './Components/projets';
import Contact from './Components/contact';

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
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* ✅ Routes supplémentaires */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/projets" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
