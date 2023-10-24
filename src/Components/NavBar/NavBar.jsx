import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function Navbar() {
  return (
    <header>
      <div className="containerNav">
        <div class="nav">
          <input type="checkbox" id="nav-check"/>
          <div class="nav-header">
            <div class="nav-title">
              <img src={logo} alt="" />
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div class="nav-links">
            <Link to="/"><a>Inicío</a></Link>
            <Link to="/sobre"><a>Sobre</a></Link>
            <Link to="/servicos"><a>Serviços</a></Link>
            <Link to="/contratar"><a>Contratar serviço</a></Link>
          </div>
        </div>
      </div>
    </header>
    
  );
}

export default Navbar;
