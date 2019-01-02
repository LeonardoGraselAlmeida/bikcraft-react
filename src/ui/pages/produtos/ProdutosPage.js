import React from 'react';
import './ProdutosPage.css';

import imgPasseio1 from './../../components/assets/produtos/bikcraft-passeio-1.jpg';
import imgPasseio2 from './../../components/assets/produtos/bikcraft-passeio-2.jpg';
import imgPasseioIcone from './../../components/assets/produtos/passeio.png';
import imgEsporte1 from './../../components/assets/produtos/bikcraft-esporte-1.jpg';
import imgEsporte2 from './../../components/assets/produtos/bikcraft-esporte-2.jpg';
import imgEsporteIcone from './../../components/assets/produtos/esporte.png';
import imgRetro1 from './../../components/assets/produtos/bikcraft-passeio-1.jpg';
import imgRetro2 from './../../components/assets/produtos/bikcraft-passeio-2.jpg';
import imgRetroIcone from './../../components/assets/produtos/passeio.png';

import { Container } from '../../components';

export default class ProdutosPage extends React.Component {
  render() {
    return (
      <div>
        <section className="produtos-introducao">
          <Container>
            <h1>Produtos</h1>
            <p>conheça todos os nossos produtos</p>
          </Container>
        </section>
        <section className="container produto-item">
          <div className="grid-11">
            <img src={imgPasseio1} alt="Bikcraft Passeio" />
            <h2>Passeio</h2>
          </div>
          <div className="grid-5 produto-icone">
            <img src={imgPasseioIcone} alt="Passeio Icone" />
          </div>
          <div className="grid-8">
            <img src={imgPasseio2} alt="Bikcraft Passeio" />
          </div>
          <div className="grid-8 produto-info">
            <p>
              Muito melhor do que passear pela orla a vidros fechados. A
              Bikcraft Passeio é uma bicicleta que une conforto e praticidade
              para o seu dia a dia. Você nunca mais vai querer saber de outra.
            </p>
            <ul>
              <li>Conforto</li>
              <li>Velocidade</li>
              <li>Design</li>
              <li>Versatilidade</li>
            </ul>
          </div>
        </section>

        <section className="container produto-item">
          <div className="grid-11">
            <img src={imgEsporte1} alt="Bikcraft Esporte" />
            <h2>Esporte</h2>
          </div>
          <div className="grid-5 produto-icone">
            <img src={imgEsporteIcone} alt="Esporte Icone" />
          </div>
          <div className="grid-8">
            <img src={imgEsporte2} alt="Bikcraft Esporte" />
          </div>
          <div className="grid-8 produto-info">
            <p>
              Mais rápida do que Forrest Gump, ninguém vai pegar você. A
              Bikcraft Esporte é uma bicicleta desenhada para a máxima
              performance. O seu desempenho supera qualquer uma da categoria.
            </p>
            <ul>
              <li>Precissão</li>
              <li>Velocidade</li>
              <li>Design</li>
              <li>Versatilidade</li>
            </ul>
          </div>
        </section>

        <section className="container produto-item">
          <div className="grid-11">
            <img src={imgRetro1} alt="Bikcraft Retro" />
            <h2>Retrô</h2>
          </div>
          <div className="grid-5 produto-icone">
            <img src={imgRetroIcone} alt="Retro Icone" />
          </div>
          <div className="grid-8">
            <img src={imgRetro2} alt="Bikcraft Retro" />
          </div>
          <div className="grid-8 produto-info">
            <p>
              O passado volta para lembrarmos o que devemos fazer no futuro. A
              Bikcraft Retrô é uma bicicleta estiloza, feita para você que gosta
              do clássico, mas que não abre mão do conforto.
            </p>
            <ul>
              <li>Conforto</li>
              <li>Velocidade</li>
              <li>Design</li>
              <li>Versatilidade</li>
            </ul>
          </div>
        </section>
        <section className="orcamento" />
      </div>
    );
  }
}
