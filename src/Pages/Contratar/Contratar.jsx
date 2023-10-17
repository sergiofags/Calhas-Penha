import React from 'react';
import Banner from '../../Components/Banner/Banner';

function Contratar() {
  const aboutBannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521758092075099/Group_20.jpg?ex=653fe114&is=652d6c14&hm=321c3f527dc92b3a1f3d5e99d3274f741985d30b534ac81ed6f7957c8560949b&';

  return (
      <Banner imageUrl={aboutBannerUrl} />
  );
}

export default Contratar;