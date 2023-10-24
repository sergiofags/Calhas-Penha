import React from 'react';
import './Footer.css';
import logoFooter from '../../Images/logoFooter.png';

function Footer() {
  return (
    <footer>
      <div className="ContainerFooter">
        <div className='logoFooter'>
          <img src={logoFooter} alt="" />
        </div>
        <div className='info'>
          <div>
            <p>email@email.com</p>
            <p>CEP: 88490-971</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>WhatsApp</p>
          </div>
          <div>
            <p>Inicío</p>
            <p>Sobre</p>
            <p>Serviços</p>
            <p>Contratar Serviço</p>
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
