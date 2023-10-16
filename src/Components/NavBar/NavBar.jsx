import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function Navbar() {
  return (
    <header>
      <div className='container'>
        <nav>
          <div className='logotipo'>
            <Link to="/"><img src={logo} alt=""/></Link>
          </div>
          <div className='links-nav'>
            <ul>
              <Link to="/" className='Link-nav' active><li className="px-3 text-xl">Início</li></Link>
              <Link to="/sobre" className='Link-nav'><li className="px-3 text-xl">Sobre</li></Link>
              <Link to="/servicos" className='Link-nav'><li className="px-3 text-xl">Serviços</li></Link>
              <Link to="/contratar" className='Link-nav'><li className="px-3 text-xl">Contratar serviços</li></Link>
            </ul>
          </div>
        </nav>
      </div>
    </header> 
  );
}

export default Navbar;
