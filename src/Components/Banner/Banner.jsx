import React from 'react';
import './Banner.css';

function Banner({ imageUrl }) {
  return (
    <div className="banner" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
  );
}

export default Banner;
