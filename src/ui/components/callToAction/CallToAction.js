import React from 'react';
import PropTypes from 'prop-types';

import './CallToAction.css';

class CallToAction extends React.Component {
  render() {
    return (
      <div className="call">
        <p>{this.props.descricao}</p>
        <a
          href={this.props.navegacao}
          className={`btn ${this.props.fundoPreto ? 'btn-preto' : ''}`}
        >
          {this.props.titulo}
        </a>
      </div>
    );
  }
}

CallToAction.propTypes = {
  descricao: PropTypes.string.isRequired,
  navegacao: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  fundoPreto: PropTypes.bool
};

export default CallToAction;
