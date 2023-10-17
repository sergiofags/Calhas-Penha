import React from 'react';

import './Home.css';

import Banner from '../../Components/Banner/Banner';
import ButtonBlue from '../../Components/ButtonBlue/ButtonBlue';

import homeServicos from '../../Images/homeServicos.jpg';
import homeContato from '../../Images/homeContato.jpg';
import ButtonTransparent from '../../Components/ButtonTransparent/ButtonTransparent';


function Home() {
  const bannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163517751957131355/bannerHome.jpg?ex=653fdd59&is=652d6859&hm=794807986e37ee0b736e46c8fd8b9c4cb95623e510afbe23e3992c2fff85e5c3&';
  const titleBanner = `Transforme sua casa com estilo e funcionalidade.`;
  const textBanner = 'Descubra nossos produtos premium agora!';

  return (
    <>
      <Banner imageUrl={bannerUrl} title={titleBanner} text={textBanner} />
        <section className='HomeServicos'>
          <div className="HomeContainer">
            <div className='text'>
              <h3>Serviços</h3>
              <h2>Seu projeto merece o melhor!</h2>
              <p>Na nossa fábrica, a qualidade encontra a inovação. Oferecemos as melhores soluções em calhas, chaminés e algerosas, cuidadosamente projetadas para proteger sua casa e aprimorar seu visual. Com uma equipe dedicada e produtos de alta qualidade, garantimos não apenas funcionalidade excepcional, mas também estilo duradouro. </p>
              <ButtonBlue content={'Nossos serviços'} />
            </div>
            <div className='image'>
              <img src={homeServicos} alt="" />
            </div>
          </div>
        </section>
        <section className='HomeContato'>
          <div className="HomeContainer">
            <div className="image">
              <img src={homeContato} alt="" />
            </div>
            <div className="text">
              <h3>Contrate-nos</h3>
              <h2>Nossos produtos são a Escolha Certa!</h2>
              <p>Nossa equipe experiente não apenas instala calhas, mas cria soluções personalizadas para atender às suas necessidades específicas. Estamos comprometidos em fornecer um serviço excepcional, desde o primeiro contato até a conclusão do projeto. Faça a escolha certa. Faça a escolha pela qualidade.</p>
              <ButtonTransparent content={'Contrate o melhor'} />
            </div>
          </div>
        </section>
        <section className='HomeMap'>
          <div className="HomeContainer">
            <div className="text">
              <h3>Localização</h3>
              <h2>Estamos aqui!</h2>
              <p>Estamos presentes nas encantadoras cidades costeiras de Santa Catarina: <strong>Palhoça, Paulo Lopes, Garopaba, Imbituba</strong> e <strong>Imaruí.</strong> Oferecemos qualidade e confiança em cada serviço prestado, tornando seu lar seguro, não importa onde você esteja.</p>
              <ButtonBlue content={'Saiba mais'} />
            </div>
            <div className="image">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1G6HduRTnpu7WuIrBauq7mpZF0HS023U&ehbc=2E312F&noprof=1" width="100%" height="100%"></iframe>
            </div>
            
          </div>
        </section>
    </> 
  );
}

export default Home;