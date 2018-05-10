import React from 'react';
import PropTypes from 'prop-types';

import './Blockquote.css';

class Blockquote extends React.Component {
  render() {
    return (
      <blockquote className="quote-externo">
        <p>&quot;{this.props.mensagem}&quot;</p>
        <cite> {this.props.autor} </cite>
      </blockquote>
    );
  }
}

Blockquote.propTypes = {
  mensagem: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired
};

export default Blockquote;
