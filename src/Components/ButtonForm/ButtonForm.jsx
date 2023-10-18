import React from 'react';
import './ButtonForm.css';

function ButtonForm({ content }) {
  return (
    <button className='ButtonForm'>
      {content}
    </button>
  );
}

export default ButtonForm;
