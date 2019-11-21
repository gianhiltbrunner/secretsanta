import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';

import { Setup } from './components/Setup.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {start: false};
  }

  render() {
    if (this.state.start) {
      return (
        <div className="App">
          <header className="App-header">
            <Setup></Setup>
          </header>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Press here to setup your secret santa!
            </p>
            <Button onClick={() => this.setState({start: true}) }>Start</Button>
          </header>
        </div>
      );
    }
  }
}

export default App;
