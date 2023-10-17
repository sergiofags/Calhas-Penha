import React from 'react';
import Banner from '../../Components/Banner/Banner';

function Servicos() {
  const aboutBannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521472178962442/Group_19.jpg?ex=653fe0d0&is=652d6bd0&hm=5eea1adf27c1b30db1682fcca701599f15cd1fa34cafcf0279a2c992e7aa3868&';

  return (
      <Banner imageUrl={aboutBannerUrl} />
  );
}

export default Servicos;