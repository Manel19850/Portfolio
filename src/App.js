import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Dashboard from './Pages/dashboard';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';

const App = () => {


  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/signin" element={<SignIn />} />
          <Route path="/admin/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
