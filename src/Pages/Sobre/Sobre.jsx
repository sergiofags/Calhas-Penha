import React from 'react';

import './Sobre.css';

import Banner from '../../Components/Banner/Banner';

function Sobre() {
  const bannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521204552994867/Group_18.jpg?ex=653fe090&is=652d6b90&hm=b7858ddf8fb12147b5a934e3f38a6e813a88e1947acb1846c27a43b95bf9b0d2&';
  const titleBanner = `Conheça a Nossa História!`;
  const textBanner = 'Compromisso, Qualidade e Experiência Desde o Início.';

  return (
    <>
      <Banner imageUrl={bannerUrl} title={titleBanner} text={textBanner} button={'s'}/>
      <section className="Sobre">
        <div className="SobreContainer">
          <div className="text">
            <h3>Sobre</h3>
            <h2>Sobre nós</h2>
          </div>
          <div className='sobre-text'>
            <h4>Sobre Nossa Empresa: Criando Experiências Duradouras em Cada Detalhe</h4>
            <p>Há 19 anos, nossa empresa tem sido a escolha confiável para soluções em calhas, chaminés, coifas, algerosas e canos de alumínio galvanizado e inox. Somos mais do que apenas uma empresa; somos artesãos apaixonados, moldando cada projeto com cuidado e precisão.</p>
          </div>
          <div className='sobre-text'>
            <h4>Compromisso Artesanal:</h4>
            <p>Nosso trabalho não é apenas uma transação; é uma expressão de nossa paixão pelo ofício. Cada peça que produzimos é cuidadosamente trabalhada, refletindo anos de experiência e dedicação. Desde a concepção até a conclusão, cada detalhe é tratado com a atenção meticulosa que só um verdadeiro artesão pode oferecer.</p>
          </div>
          <div className='sobre-text'>
            <h4>Ampla Variedade de Cores e Opções:</h4>
            <p>Entendemos que cada cliente é único, assim como seus gostos e preferências. É por isso que oferecemos uma ampla variedade de opções de cores para nossas calhas, canos, coifas, chaminés e outros produtos. Nossa paleta diversificada permite que você personalize cada peça de acordo com o seu estilo e o visual desejado para sua propriedade.</p>
          </div>
          <div className='sobre-text'>
            <h4>Pintura Eletrostática:</h4>
            <p>Além da qualidade estrutural, também nos dedicamos à estética. Utilizamos técnicas avançadas de pintura eletrostática para garantir que cada peça não apenas cumpra sua função, mas também se destaque visualmente. A durabilidade e resistência de nossas peças são amplificadas por nossa abordagem à pintura, proporcionando não apenas beleza, mas também longevidade.</p>
            <br/>
            <p>Na nossa empresa, não estamos apenas construindo produtos; estamos construindo relacionamentos duradouros. Confie em nós para transformar suas ideias em realidade, com produtos que não são apenas funcionais, mas também belos. Estamos aqui para superar suas expectativas, uma calha de cada vez.</p>
          </div>
          <div className='sobre-text'>
            <h4>Atendimento Excepcional:</h4>
            <p>Nosso compromisso com você vai além da qualidade dos nossos produtos. Estamos aqui para atendê-lo de segunda a sexta, das 08:00 às 18:00 horas, prontos para responder às suas perguntas, discutir suas ideias e encontrar a melhor solução para suas necessidades. Sua satisfação é nossa prioridade máxima.</p>
          </div>
          <div className='sobre-text'>
            <h4>Confiança e Garantia:</h4>
            <p>Quando você escolhe nossos serviços, está escolhendo confiança e integridade. Cada trabalho que realizamos é respaldado por nossa garantia de qualidade, assegurando que você receba não apenas um produto excepcional, mas também paz de espírito. Sua confiança em nós é o que nos impulsiona a superar expectativas a cada projeto.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;