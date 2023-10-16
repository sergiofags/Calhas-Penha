import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Sobre from '../Pages/Sobre/Sobre';
import Servicos from '../Pages/Servicos/Servicos';
import Contratar from '../Pages/Contratar/Contratar';
import NavBar from '../Components/NavBar/NavBar';

function AppRouter() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contratar" element={<Contratar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;