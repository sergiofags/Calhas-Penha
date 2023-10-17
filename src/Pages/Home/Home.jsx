import React from 'react';
import Banner from '../../Components/Banner/Banner';

function Home() {
  const aboutBannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163517751957131355/bannerHome.jpg?ex=653fdd59&is=652d6859&hm=794807986e37ee0b736e46c8fd8b9c4cb95623e510afbe23e3992c2fff85e5c3&';

  return (
      <Banner imageUrl={aboutBannerUrl}>
        <div className="content-banner">
          <h1>Transforme sua casa com estilo e funcionalidade.</h1>
        </div>
      </Banner>
  );
}

export default Home;