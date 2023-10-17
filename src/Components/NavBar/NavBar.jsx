import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='container'>
        <nav>
          <div className='logotipo'>
            <Link to="/"><img src={logo} alt=""/></Link>
          </div>
          <div className={`links-nav ${menuOpen ? 'active' : ''}`}>

            <ul>
              <Link to="/" className='Link-nav'><li>Início</li></Link>
              <Link to="/sobre" className='Link-nav'><li>Sobre</li></Link>
              <Link to="/servicos" className='Link-nav'><li>Serviços</li></Link>
              <Link to="/contratar" className='Link-nav'><li>Contratar serviços</li></Link>
            </ul>
          </div>
          <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header> 
  );
}

export default Navbar;
