import React, { useState } from 'react';

import './Contratar.css';

import Banner from '../../Components/Banner/Banner';

function Contratar() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    bairro: '',
    cidade: '',
    servico: '',
    pagamento: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const { nome, telefone, endereco, bairro, cidade, servico, pagamento, mensagem } = formData;

    if (nome === '' || telefone === '' || endereco === '' || bairro === '' || cidade === '' || servico === '' || pagamento === '') {
      alert('Preencha todos os campos!');
    } else {
      const whatsappLink = `https://wa.me/5548984651456?text=Olá, meu nome é *${nome}*.%0A%0A*Telefone:* ${telefone}.%0A%0A*Endereço:* ${endereco}.%0A%0A*Bairro:* ${bairro}.%0A%0A*Cidade:* ${cidade}.%0A%0A*Serviço:* ${servico}.%0A%0A*Forma de Pagamento:* ${pagamento}.%0A%0A*Mensagem:* ${mensagem}`;
      window.open(whatsappLink, '_blank');
    }
  };

  const bannerUrl = 'https://cdn.discordapp.com/attachments/1157136611675484213/1163521758092075099/Group_20.jpg?ex=653fe114&is=652d6c14&hm=321c3f527dc92b3a1f3d5e99d3274f741985d30b534ac81ed6f7957c8560949b&';
  const titleBanner = `Serviços Personalizados!`;
  const textBanner = 'Faça o seu orçamento logo a baixo!';

  return (
    <>
      <Banner imageUrl={bannerUrl} title={titleBanner} text={textBanner} />
      <section className="Contratar">
        <div className="ContratarContainer">
          <div className="text">
            <h3>Contratar Serviço</h3>
            <h2>Faça o seu pedido</h2>
          </div>
          <form action="">
            <div className="linha-um">
              <input type="text" name="nome" onChange={handleChange} placeholder='Nome completo' required />
              <input type="tel" name="telefone" onChange={handleChange} placeholder='Número de telefone' required />
            </div>
            <div className="linha-dois">
              <input type="text" name="endereco" onChange={handleChange} placeholder='Endereço' required />
              <input type="text" name="bairro" onChange={handleChange} placeholder='Bairro' required />
              <select name="cidade" onChange={handleChange} required>
                <option value="">Cidade</option>
                <option value="Penha">Penha</option>
                <option value="Paulo Lopes">Paulo Lopes</option>
                <option value="Garopaba">Garopaba</option>
                <option value="Imbituba">Imbituba</option>
                <option value="Imaruí">Imaruí</option>
              </select>
            </div>
            <div className="linha-tres">
              <select name="servico" onChange={handleChange} required>
                <option value="">Serviços</option>
                <option value="Calhas de beiral">Calhas de beiral</option>
                <option value="Cano de alumínio">Cano de alumínio</option>
                <option value="Algerosas e calhas fora do padrão">Algerosas e calhas fora do padrão</option>
                <option value="Cano de chaminé">Cano de chaminé</option>
                <option value="Coifas">Coifas</option>
              </select>
              <select name="pagamento" onChange={handleChange} required>
                <option value="">Forma de pagamento</option>
                <option value="Pix">Pix</option>
                <option value="Dinheiro">Dinheiro</option>
              </select>
            </div>
            <div className="linha-quatro">
              <textarea name="mensagem" onChange={handleChange} cols="30" rows="5" placeholder='Mensagem'></textarea>
            </div>
            <div className="linha-cinco">
              <button className="button-form" onClick={handleWhatsApp}>Fazer orçamento via WhatsApp</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contratar;
