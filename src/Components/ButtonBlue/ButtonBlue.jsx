import React from 'react';
import './ButtonBlue.css';
import { Link } from 'react-router-dom';

function ButtonBlue({ content, path }) {
  return (
    <Link to={path}>
      <button className='ButtonBlue'>
        <p>{content}</p>
      </button>
    </Link>
  );
}

export default ButtonBlue;
