import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
  render() {
    return (
      <nav className="grid-12 menu">
        <ul>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/portfolio">Portfólio</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
    );
  }
}
