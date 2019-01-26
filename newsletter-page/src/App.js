import React, { Component } from 'react';
import './App.scss';
import Recommendations from './components/Recommendations.js';
import Thanks from "./components/Thanks.js";

class App extends Component {
  state = {
    submitted: false
  };

  handleSubitted = () => {
    this.setState({
      submitted: true
    });
  }

  render() {
    return <div className="App">
      {this.state.submitted ? <Thanks /> : <Recommendations handleSubmitted={this.handleSubitted} />}
      </div>;
  }
}

export default App;