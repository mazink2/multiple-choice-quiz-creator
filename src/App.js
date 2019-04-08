import React, { Component } from 'react';
import { Forms } from './components/Forms';
import { Display } from './components/Display';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="grid-container">
            <div className="grid">
              <Forms />
              <Display />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;