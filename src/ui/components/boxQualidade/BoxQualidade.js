import React from 'react';
import PropTypes from 'prop-types';
import './BoxQualidade.css';

import imgQualidade from '../../assets/bikcraft-qualidade.png';

import { Container, SubTitulo } from '../index';
import ListaQualidade from './listaQualidade/ListaQualidade';

class BoxQualidade extends React.Component {
  render() {
    return (
      <section className="qualidade container">
        <Container>
          <SubTitulo subTitle="Qualidade" />
          <img src={imgQualidade} alt="Bikcraft" />
          <ListaQualidade />

          {this.props.children}
        </Container>
      </section>
    );
  }
}

BoxQualidade.propTypes = {
  children: PropTypes.node
};

export default BoxQualidade;
