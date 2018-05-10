import React from 'react';

import './HomePage.css';

import { CallToAction, Container, SubTitulo } from '../../components';
import ListaProdutos from './listaProdutos/ListaProdutos';
import ListaPortfolios from './listaPortfolios/ListaPortfolios';

import imgQualidade from '../../assets/bikcraft-qualidade.png';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section className="introducao">
          <Container>
            <h1>Bicicletas Feitas a Mão</h1>
            <blockquote className="quote-externo">
              <p>
                &quot;não tenha nada em sua casa que você não considere útil ou
                acredita ser bonito&quot;
              </p>
              <cite> WILLIAM MORRIS </cite>
            </blockquote>
            <a href="/produtos" className="btn">
              Orçamento
            </a>
          </Container>
        </section>

        <section className="produtos container">
          <SubTitulo subTitle="Produtos" />
          <ListaProdutos />
          <CallToAction
            titulo="Produtos"
            descricao="Clique aqui e veja os detalhes dos produtos"
            fundoPreto={true}
            navegacao="/produtos"
          />
        </section>

        <section className="portfolio">
          <Container>
            <SubTitulo subTitle="Portfólio" />
            <ListaPortfolios />
            <CallToAction
              titulo="Portfólio"
              descricao="conheça mais o nosso portfólio"
              fundoPreto={false}
              navegacao="/portfolio"
            />
          </Container>
        </section>

        <section className="qualidade container">
          <SubTitulo subTitle="Qualidade" />
          <img src={imgQualidade} alt="Bikcraft" />
          <ul className="qualidade-lista">
            <li className="grid-1-3">
              <h3>Durabilidade</h3>
              <p>
                Sólida como pedra, leve como o vento e resistente como o
                diamante, são nossos diferenciais.
              </p>
            </li>
            <li className="grid-1-3">
              <h3>Design</h3>
              <p>
                Feitas sob medida para o melhor conforto e eficiência. Adaptamos
                a sua Bikcraft para o seu corpo.
              </p>
            </li>
            <li className="grid-1-3">
              <h3>Sustentabilidade</h3>
              <p>
                Além de ajudar a cuidar do meio ambiente, tirando carros da rua,
                toda a produção é sustentável.
              </p>
            </li>
          </ul>

          <CallToAction
            titulo="Sobre"
            descricao="conheça mais a nossa história"
            fundoPreto={true}
            navegacao="/sobre"
          />
        </section>
      </div>
    );
  }
}
