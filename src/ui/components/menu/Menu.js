import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu() {
    var links = [
      { link: '/', label: 'Home' },
      { link: '/sobre', label: 'Sobre' },
      { link: '/produtos', label: 'Produtos' },
      { link: '/portfolio', label: 'Portfólio' },
      { link: '/contato', label: 'Contato' }
    ];

    return links.map((route, index) => {
      return (
        <li key={index}>
          <a
            href={route.link}
            className={location.pathname === route.link ? 'route-actived' : ''}
          >
            {route.label}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="grid-12 menu">
        <ul>{this.renderMenu()}</ul>
      </nav>
    );
  }
}
