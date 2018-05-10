import React from 'react';

import './Header.css';
import logo from '../../assets/bikcraft.png';
import { Container, Menu } from '../index';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Container>
          <a className="grid-4" href="/">
            <img src={logo} alt="Logo Empresa" />
          </a>
          <Menu />
        </Container>
      </header>
    );
  }
}
