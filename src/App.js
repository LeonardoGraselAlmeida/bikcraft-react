import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './ui/routes';

import { Header } from './ui/components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
