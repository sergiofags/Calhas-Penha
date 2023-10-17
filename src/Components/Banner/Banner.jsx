import React from 'react';
import './Banner.css';
import ButtonBanner from '../ButtonBanner/ButtonBanner';

function Banner({ imageUrl, title, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="container">
        <div className="content-banner">
          <h1>{title}</h1>
          <p>{text}</p>
          <ButtonBanner />
        </div>
      </div>
    </div>
  );
}

export default Banner;
