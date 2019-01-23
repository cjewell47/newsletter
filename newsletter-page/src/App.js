import React, { Component } from 'react';
import './App.scss';
import Recommendations from './components/Recommendations.js';
import Thanks from "./components/Thanks.js";

class App extends Component {
  render() {
    return <div className="App">
        <Recommendations />
        <Thanks />
      </div>;
  }
}

export default App;