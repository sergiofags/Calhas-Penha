import React from 'react';
import './ButtonBanner.css';
import { Link } from 'react-router-dom';

function ButtonBanner() {
  return (
    <Link to="/contratar"><button className='ButtonBanner'><p>Faça um orçamento!</p></button></Link>
  );
}

export default ButtonBanner;
