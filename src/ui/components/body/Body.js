import React from 'react';
import PropTypes from 'prop-types';

import './Body.css';

class Body extends React.Component {
  render() {
    return <div className="body">{this.props.children}</div>;
  }
}

Body.propTypes = {
  children: PropTypes.node
};

export default Body;
