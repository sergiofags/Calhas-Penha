import React from 'react';
import './Banner.css';
import ButtonBanner from '../ButtonBanner/ButtonBanner';

function Banner({ imageUrl, title, text, button }) {
  return (
    <div className="banner" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="containerBanner">
        <div className="content-banner">
          <h1>{title}</h1>
          <p>{text}</p>
          {button === 's' && <ButtonBanner />}
        </div>
      </div>
    </div>
  );
}

export default Banner;
