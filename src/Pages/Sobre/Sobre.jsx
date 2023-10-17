import React from 'react';
import Banner from '../../Components/Banner/Banner';

function Sobre() {
  const aboutBannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521204552994867/Group_18.jpg?ex=653fe090&is=652d6b90&hm=b7858ddf8fb12147b5a934e3f38a6e813a88e1947acb1846c27a43b95bf9b0d2&';

  return (
      <Banner imageUrl={aboutBannerUrl} />
  );
}

export default Sobre;