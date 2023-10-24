import React from 'react';
import './Footer.css';
import logoFooter from '../../Images/logoFooter.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="ContainerFooter">
        <div className='logoFooter'>
          <Link to="/"><img src={logoFooter} alt="" /></Link>
        </div>
        <div className='info'>
          <div>
            <p>email@email.com</p>
            <p>CEP: 88490-971</p>
          </div>
          <div>
            <Link to=""><p>Instagram</p></Link>
            <Link to=""><p>WhatsApp</p></Link>
          </div>
          <div>
            <Link to="/"><p>Inicío</p></Link>
            <Link to="/sobre"><p>Sobre</p></Link>
            <Link to="/servicos"><p>Serviços</p></Link>
            <Link to="/contratar"><p>Contratar Serviço</p></Link>
          </div>
        </div>
        <div className='direitos'>
          <p>Calhas Penha | 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
