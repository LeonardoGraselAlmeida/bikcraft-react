import React from 'react';

export default class FormOrcamento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      especificacoes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = {};
    change[event.target.id] = event.target.value;
    this.setState({ ...this.state, ...change });
  }

  handleSubmit(event) {
    console.log(...this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form
        id="form_orcamento"
        className="grid-8 form_orcamento"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={this.state.nome}
          onChange={this.handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          id="telefone"
          value={this.state.telefone}
          onChange={this.handleChange}
        />

        <label htmlFor="especificacoes">Especificações</label>
        <textarea
          id="especificacoes"
          value={this.state.especificacoes}
          onChange={this.handleChange}
        />

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    );
  }
}
