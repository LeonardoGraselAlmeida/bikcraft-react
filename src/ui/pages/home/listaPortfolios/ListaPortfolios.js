import React from 'react';

import './ListaPortfolios.css';

import imgRetro from '../../../assets/portfolio/retro.jpg';
import imgPasseio from '../../../assets/portfolio/passeio.jpg';
import imgEsporte from '../../../assets/portfolio/esporte.jpg';


export default class ListaPortfolios extends React.Component {
    render() {
        return (
            <ul className='portfolio-lista'>
              <li className="grid-8">
                <img src={imgRetro} alt="Bicicleta Retro" />
              </li>
              <li className="grid-8">
                <img src={imgPasseio} alt="Bicicleta Passeio" />
              </li>
              <li className="grid-16">
                <img src={imgEsporte} alt="Bicicleta Esporte" />
              </li>
            </ul>
        );
    }
}