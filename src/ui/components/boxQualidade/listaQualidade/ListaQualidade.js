import React from 'react';

import './ListaQualidade.css';

export default class ListaQualidade extends React.Component {
  render() {
    return (
      <ul className="qualidade-lista">
        <li className="grid-1-3">
          <h3>Durabilidade</h3>
          <p>
            Sólida como pedra, leve como o vento e resistente como o diamante,
            são nossos diferenciais.
          </p>
        </li>
        <li className="grid-1-3">
          <h3>Design</h3>
          <p>
            Feitas sob medida para o melhor conforto e eficiência. Adaptamos a
            sua Bikcraft para o seu corpo.
          </p>
        </li>
        <li className="grid-1-3">
          <h3>Sustentabilidade</h3>
          <p>
            Além de ajudar a cuidar do meio ambiente, tirando carros da rua,
            toda a produção é sustentável.
          </p>
        </li>
      </ul>
    );
  }
}
