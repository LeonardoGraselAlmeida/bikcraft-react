import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sobre" component={HomePage} />
        <Route path="/produtos" component={HomePage} />
        <Route path="/portfolio" component={HomePage} />
        <Route path="/contato" component={HomePage} />
      </Switch>
    );
  }
}
