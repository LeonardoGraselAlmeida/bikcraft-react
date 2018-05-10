import React from 'react';

import Produto from './produto/Produto';


import imgPasseio from '../../../assets/produtos/passeio.png';
import imgEsportiva from '../../../assets/produtos/esporte.png';
import imgRetro from '../../../assets/produtos/retro.png';


export default class ListaProdutos extends React.Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);

    this.state = {
        produtos: [
          {
            titulo: 'Passeio',
            descricao:
              'Muito melhor do que passear pela orla a vidros fechados.',
            imagem: imgPasseio
          },
          {
            titulo: 'Esporte',
            descricao:
              'Mais rápida do que Forrest Gump, ninguém vai pegar você.',
            imagem: imgEsportiva
          },
          {
            titulo: 'Retro',
            descricao:
              'O passado volta para lembrarmos o que devemos fazer no futuro.',
            imagem: imgRetro
          }
        ]
      };
  }

  renderRows() {
    const rows = this.state.produtos || [];

    return rows.map((row, index) => {
      return (
        <Produto
          key={index}
          titulo={row.titulo}
          descricao={row.descricao}
          imagem={row.imagem}
        />
      );
    });
  }

  render() {
    return <ul className="produtos-lista">{this.renderRows()}</ul>;
  }
}