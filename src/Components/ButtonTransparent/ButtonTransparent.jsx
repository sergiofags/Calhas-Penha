import React from 'react';
import './ButtonTransparent.css';
import { Link } from 'react-router-dom';

function ButtonTransparent({ content, path }) {
  return (
    <Link to={path}>
      <button className='ButtonTransparent'>
        <p>{content}</p>
      </button>
    </Link>
    
  );
}

export default ButtonTransparent;
