import React from 'react';
import './SobrePage.css';

import imgEquipeBikcraft from '../../assets/equipe-bikcraft.jpg';

import { BoxQualidade, Container } from '../../components';

export default class SobrePage extends React.Component {
  render() {
    return (
      <div>
        <section className="sobre-introducao">
          <Container>
            <h1>Sobre</h1>
            <p>conheça mais sobre a Bikcraft</p>
          </Container>
        </section>
        <section className="sobre-valores">
          <Container>
            <div className="grid-10">
              <h2 className="subtitulo-interno">História, Missão e Visão</h2>
              <p>
                Quando iniciamos a Bikcraft queriamos apenas um produto que
                adoraríamos utilizar. Eramos apaixonados por pedalar e também
                por fazer as coisas com as nossas próprias mãos. Assim surgiu um
                sonho na garagem da nossa casa.
              </p>
              <p>
                Conheça os nossos produtos, pergunte para os nossos clientes e
                descubra a maravilha de ter uma Bikcraft na sua casa.
              </p>
            </div>
            <div className="grid-6">
              <h2 className="subtitulo-interno">Valores</h2>
              <ul>
                <li>– Qualidade no processo com</li>
                <li>– Foco no cliente sem perder a</li>
                <li>– Diversão, preservando a</li>
                <li>– Natureza com sustentabilidade</li>
              </ul>
            </div>
            <div className="img-equipe">
              <img src={imgEquipeBikcraft} alt="Equipe Bikcraft" />
            </div>
          </Container>
        </section>
        <BoxQualidade />
      </div>
    );
  }
}
