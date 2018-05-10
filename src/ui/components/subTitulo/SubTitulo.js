import React from 'react';
import PropTypes from 'prop-types';

import './SubTitulo.css';

class SubTitulo extends React.Component {
  render() {
    return <h2 className="subtitulo">{this.props.subTitle}</h2>;
  }
}

SubTitulo.propTypes = {
  subTitle: PropTypes.string.isRequired
};

export default SubTitulo;
