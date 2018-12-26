import React, { Component } from 'react';
import './App.scss';
import { Header } from './App.styled';
import { Logo } from './img';
import { YodaService } from './service/YodaService';
import * as variables from './scss/App.variables.scss';
import { AppStore } from './state/AppStore';
import { withStore } from './state/withStore';

interface AppProps {
  appStore: AppStore;
}

class AppStateful
  extends Component<AppProps> {

  private yodaService: YodaService = new YodaService();

  render() {
    const {
      props: {
        appStore: {
          speakStyle,
          toggleSpeak,
        },
      },
    } = this;

    const speak = this.yodaService.speak(speakStyle);

    return (
      <div className="App">
        <Header
          color={variables.color}
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
          <p>
            Speaking: {speak}
            <button onClick={toggleSpeak}>Toggle</button>
          </p>
        </Header>
      </div>
    );
  }
}

export const App = withStore(
  AppStateful,
  'appStore',
);
