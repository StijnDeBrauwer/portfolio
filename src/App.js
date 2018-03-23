import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./modules/Homepage/Homepage";

class App extends Component {
  render() {
    return (

        <Homepage welcomeMessage={'Test'}/>
    );
  }
}

export default App;
