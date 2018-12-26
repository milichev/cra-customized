import React, { Component } from 'react';
import './App.scss';
import { Header } from './App.styled';
import { Logo } from './img';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          color="maroon"
        >
          <Logo
            className="App-logo"
          />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    );
  }
}

export default App;
