import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fortune: "Press button to get new fortune",
    };
    this.generateFortune = this.generateFortune.bind(this);
  }
  async generateFortune() {
    var res = await axios.get("http://localhost:8080")
    this.setState({
      fortune: res.data
    })
  }
  render() {

    return (
      < div className="App" >
        <header className="App-header">
          <p className="App-headline">
            Fortune cookies
        </p>

          <p>
            {this.state.fortune}
          </p>

          <button className="button" onClick={this.generateFortune}>
            Generate fortune
        </button>
        </header>
      </div >
    );
  }

}

export default App;
