import React from 'react';

import logo from '../../assets/images/marca.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <a>
            <img src={logo} alt="Logo Empresa" />
          </a>
        </div>
      </header>
    );
  }
}
