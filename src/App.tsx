import React, { Component } from 'react';
import './App.scss';
import { Header } from './App.styled';
import { Logo } from './img';
import { SpeakStyle, YodaService } from './service/YodaService';

interface AppProps {
}

interface AppState {
  speakStyle: SpeakStyle;
}

class App extends Component<AppProps, AppState> {

  state = {
    speakStyle: SpeakStyle.human,
  };

  private yodaService: YodaService = new YodaService();

  render() {
    const {
      state: {
        speakStyle,
      },
    } = this;

    const speak = this.yodaService.speak(speakStyle);

    return (
      <div className="App">
        <Header
          // color="maroon"
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
            <button onClick={this.handleToggleSpeak}>Toggle</button>
          </p>
        </Header>
      </div>
    );
  }

  private handleToggleSpeak = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {
      state: {
        speakStyle: prev,
      },
    } = this;
    const speakStyle = prev === SpeakStyle.human
      ? SpeakStyle.yoda
      : SpeakStyle.human;
    this.setState({speakStyle});
  };
}

export default App;
