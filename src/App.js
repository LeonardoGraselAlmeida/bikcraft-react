import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './ui/routes';

import { Body, Footer, Header } from './ui/components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Body>
            <Routes />
          </Body>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
