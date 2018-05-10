import React from 'react';
import PropTypes from 'prop-types';

import './Produto.css';

class Produto extends React.Component {
  render() {
    return (
      <li className="grid-1-3">
        <div className="produtos-icone">
          <img src={this.props.imagem} alt={`Bikcraft ${this.props.titulo}`} />
        </div>
        <h3>{this.props.titulo}</h3>
        <p>
          {this.props.descricao}
        </p>
      </li>
    );
  }
}

Produto.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired
};

export default Produto;
