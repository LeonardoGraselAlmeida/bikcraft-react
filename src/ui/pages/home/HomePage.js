import React from 'react';

import './HomePage.css';

import {
  Blockquote,
  BoxQualidade,
  CallToAction,
  Container,
  SubTitulo
} from '../../components';
import ListaProdutos from './listaProdutos/ListaProdutos';
import ListaPortfolios from './listaPortfolios/ListaPortfolios';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section className="introducao">
          <Container>
            <h1>Bicicletas Feitas a Mão</h1>
            <Blockquote
              mensagem="não tenha nada em sua casa que você não considere útil ou
                acredita ser bonito"
              autor="WILLIAM MORRIS"
            />
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

        <BoxQualidade className="qualidade container">
          <CallToAction
            titulo="Sobre"
            descricao="conheça mais a nossa história"
            fundoPreto={true}
            navegacao="/sobre"
          />
        </BoxQualidade>
      </div>
    );
  }
}
