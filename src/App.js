import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoneyButtonDonate from "./components/MoneyButtonDonate.jsx";

class App extends Component {

  state = {
    devMode: true,
    type: "buy",
    to:"145",
    labelMoneyButton: "Slide to Donate",
    labelAmount: "Enter Amount",
    labelReference: "Order Number"
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateType = val => event => {
    if (event.target) {
      if (event.target.checked) {
        // this.props.updateCategory(e.target.value)
        this.setState({
          type: val,
        });
      }
    }
  }

  styles = {
    padding: '3px'
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to money-button-donate</h1>
        </header>
        <div style={{"textAlign":"left", "margin":"20px"}}>
          <p>View source on GitHub <a href="https://github.com/dfoderick/money-button-donate">https://github.com/dfoderick/money-button-donate</a></p>
          <div>
            <div style={{"color":"red", ...this.styles}}>
              {/* !!! Note that the button is live. Do not slide the money button unless you want to make a donation to me!!! */}
              Money Button is working in demo mode. That means no funds will be spent from your account.
            </div>
            {/* <div>
              <input type="radio" checked={this.state.devMode === true}></input> Dev
              <input type="radio" checked={this.state.devMode === false}></input> Live
            </div> */}
            <fieldset>
            <legend>Customize your MoneyButton</legend>
              <div style={{...this.styles}}>
                <input type="radio" radioGroup="type" checked={this.state.type === 'tip'} onChange={this.updateType('tip')}></input> Tip
                <input type="radio" radioGroup="type" checked={this.state.type === 'buy'} onChange={this.updateType('buy')}></input> Buy
              </div>
              <div style={{...this.styles}}>
                Send to (userid or address) <input type="text" value={this.state.to} onChange={this.handleChange("to")}></input>
              </div>
              <div style={{...this.styles}}>
                Money Button Label <input type="text" value={this.state.labelMoneyButton} onChange={this.handleChange("labelMoneyButton")}></input>
              </div>
              <div style={{...this.styles}}>
                Prompt for Amount <input type="text" value={this.state.labelAmount} onChange={this.handleChange("labelAmount")}></input>
              </div>
              <div style={{...this.styles}}>
                Prompt for Reference <input type="text" value={this.state.labelReference} onChange={this.handleChange("labelReference")}></input>
              </div>
            </fieldset>          
           </div>
           <p>Select amount with a textbox...</p>
          <fieldset className="App-intro">
              <MoneyButtonDonate display="input" buttonId="input" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type}
              />
          </fieldset>
          <p>Select amount with a slider control...</p>
          <fieldset className="App-intro">
              <MoneyButtonDonate buttonId="slider" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type}
              />
          </fieldset>
          <p>Select amount with a drop down control...</p>
          <fieldset className="App-intro">
              <MoneyButtonDonate display="dropdown" buttonId="dropdown" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type}
              />
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
