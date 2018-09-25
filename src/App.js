import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoneyButtonDonate from "./components/MoneyButtonDonate.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to money-button-donate</h1>
        </header>
        <div style={{"textAlign":"left", "margin":"20px"}}>
          <p>View source on GitHub <a href="https://github.com/dfoderick/money-button-donate">https://github.com/dfoderick/money-button-donate</a></p>
          <p style={{"color":"red"}}>
            !!! Note that the button is live. Do not slide the money button unless you want to make a donation to me!!!
          {/*
            Customize your button
            <div>
              to
            </div>
            <div>
              currency
            </div>
            <div>
              label
            </div>
          */}
           </p>
          <p>Select donation amount with a slider control...</p>
          <fieldset className="App-intro">
              <MoneyButtonDonate />
          </fieldset>
          <p>Select donation amount with a drop down control...</p>
          <fieldset className="App-intro">
              <MoneyButtonDonate display="dropdown" />
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
