import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, SobrePage, ProdutosPage } from '../pages';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sobre" component={SobrePage} />
        <Route path="/produtos" component={ProdutosPage} />
        <Route path="/portfolio" component={HomePage} />
        <Route path="/contato" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}
