import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './ui/routes';

import { Footer, Header } from './ui/components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
