import React from 'react';

import './Servicos.css';

import Banner from '../../Components/Banner/Banner';

import CalhasBeiral from '../../Images/CalhasBeiral.jpg';
import Algerosas from '../../Images/Algerosas.png';
import CanoAluminio from '../../Images/CanoAluminio.png';
import Chamine from '../../Images/Chamine.png';
import Coifa from '../../Images/Coifa.png';

function Servicos() {
  const bannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521472178962442/Group_19.jpg?ex=653fe0d0&is=652d6bd0&hm=5eea1adf27c1b30db1682fcca701599f15cd1fa34cafcf0279a2c992e7aa3868&';
  const titleBanner = `Serviços Especializados!`;
  const textBanner = 'Transformando Ideias em Estruturas de Qualidade!';

  return (
    <>
      <Banner imageUrl={bannerUrl} title={titleBanner} text={textBanner} button={'s'}/>
      <section className="Servicos">
        <div className="ServicosContainer">
          <div className="text">
            <h3>Serviços</h3>
            <h2>Nossos serviços</h2>
            <p>Na nossa empresa, dedicamo-nos a oferecer serviços excepcionais de calhas, algerozes, chaminés e coifas em alumínio galvanizado e inox. Com habilidade artesanal e materiais de alta qualidade, transformamos ideias em realidade.</p>
          </div>
          <div className="Servicos-Grid">
            <div>
              <h4>Calhas de beiral</h4>
              <p>R$ 64 reais por metro com Pintura Eletrostática.<br></br>R$ 58 reais por metro sem Pintura. </p>
              <div className="image">
                <img src={CalhasBeiral} alt="" />
              </div>
            </div>
            <div>
              <h4>Cano de alumínio</h4>
              <p>R$ 64 reais com Pintura Eletrostática.<br></br>R$ 58 reais sem Pintura. </p>
              <div className="image">
                <img src={CanoAluminio} alt="" />
              </div>
            </div>
            <div>
              <h4>Algerosas e calhas fora do padrão</h4>
              <p>R$ 165,00 o m²</p>
              <div className="image">
                <img src={Algerosas} alt="" />
              </div>
            </div>
            <div>
              <h4>Cano de chaminé</h4>
              <p>R$ 180,00 cano de 20cm de diâmetro.<br></br>R$ 200,00 cano de 25cm de diâmetro.<br></br>R$ 220,00 cano de 30cm de diâmetro.</p>
              <div className="image">
                <img src={Chamine} alt="" />
              </div>
            </div>
            <div>
              <h4>Coifas</h4>
              <p>R$ 64 reais por metro com Pintura Eletrostática.<br></br>R$ 58 reais por metro sem Pintura. </p>
              <div className="image">
                <img src={Coifa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
      
  );
}

export default Servicos;