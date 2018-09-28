import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Card, CardBody,CardTitle } from 'reactstrap';
import MoneyButtonDonate from "./components/MoneyButtonDonate.jsx";
import { SocialIcon } from 'react-social-icons';

class App extends Component {

  state = {
    devMode: true,
    type: "buy",
    to:"",
    currency:"USD",
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

    let code=`
    <div style="padding:5px">
    <div>
      ${this.state.labelReference}
    </div>
    <div>
      <input type="text" maxLength="20" id="pay-reference" size="15" name="pay-reference" onkeyup="return changeReference(this, event);"></input>
    </div>
    <div>
      ${this.state.labelAmount}
    </div>
    <div>
      <input type="number" min="0.01" max="100000.00" step="0.01" size="100px" onkeyup="return changeAmount(this, event);" name="pay-amount"></input>
    </div>
  </div>
  
  <div id="pay-button"></div>
  <script src="https://api.moneybutton.com/moneybutton.js"></script>
  <script>
    const mb_to = '${this.state.to}';
    const mb_type = '${this.state.type}';
    const mb_currency = '${this.state.currency}';
    const mb_label = '${this.state.labelMoneyButton}';
    moneyButton.render(
      document.getElementById('pay-button'), {
        to: mb_to,
        type: mb_type,
        amount: 0,
        currency: mb_currency,
        label: mb_label
      }
    );
  
    function renderMoneyButton(amt, reference) {
      moneyButton.render(
        document.getElementById('pay-button'), {
          to: mb_to,
          type: mb_type,
          amount: amt,
          currency: mb_currency,
          opReturnData: reference,
          label: mb_label
        }
      );
    }
  
    function changeAmount(obj, event) {
      if (event.target.value) {
        renderMoneyButton(event.target.value, document.getElementById('pay-reference').value);
      }
    }
  
    function changeReference(obj, event) {
      if (event.target.value) {
        renderMoneyButton(document.getElementById('pay-amount').value, event.target.value);
      }
    }
  
  </script>
      `;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Customize your MoneyButton</h1>
        </header>
        <div style={{"alignText":"left", padding:"20px"}}>
          <div className="row">
            <div style={{"width":"50%"}}>
            <p>View source on GitHub <a href="https://github.com/dfoderick/money-button-donate">https://github.com/dfoderick/money-button-donate</a></p>
            </div>
            <div style={{"width":"50%", "textAlign":"right", "padding":"5px"}}>
              <a href="https://twitter.com/dfoderick?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @dfoderick</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <SocialIcon url="http://twitter.com/dfoderick" style={{ height: 35, width: 35, margin:"5px" }} />
            </div>
          </div>
          <div>
            <Alert color="primary">
              Money Button is working in demo mode. That means no funds will be spent from your account.
            </Alert>
            <div className="row">
            <Card style={{"width":"50%"}}>
            <CardBody>
              <CardTitle>Customize your MoneyButton</CardTitle>
            <div className="form-group form-inline" style={{"float":"left"}}>
            <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Type</label>
                <input type="radio" radioGroup="type" className="form-control" checked={this.state.type === 'tip'} onChange={this.updateType('tip')}></input> Tip
                &nbsp;
                <input type="radio" radioGroup="type" className="form-control" checked={this.state.type === 'buy'} onChange={this.updateType('buy')}></input> Buy
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Send to (User Number or address)</label>
                 <input type="text" className="form-control" value={this.state.to} onChange={this.handleChange("to")}></input>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Money Button Label</label>
                 <input type="text" className="form-control" value={this.state.labelMoneyButton} onChange={this.handleChange("labelMoneyButton")}></input>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Prompt for Amount</label>
                 <input type="text" className="form-control" value={this.state.labelAmount} onChange={this.handleChange("labelAmount")}></input>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
              <label className="col-sm-4 col-form-label" >Prompt for Reference</label>
                 <input type="text" className="form-control" value={this.state.labelReference} onChange={this.handleChange("labelReference")}></input>
              </div>
              </div>
              </CardBody>
            </Card>          
            <Card style={{"width":"50%"}}>
                  <CardBody>
                    <CardTitle>Copy Code</CardTitle>
                    <div>
                      <textarea id="mb-code" rows="10" cols="80" value={code}>
                      </textarea>
                    </div>
                    </CardBody>
            </Card>
           </div>
           </div>
          <Card>
            <CardBody>
            <CardTitle>Select amount with a textbox...</CardTitle>
              <MoneyButtonDonate display="input" buttonId="input" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type} to={this.state.to}
              />
              </CardBody>
          </Card>

          <Card>
            <CardBody>
            <CardTitle>Select amount with a slider control...</CardTitle>
              <MoneyButtonDonate buttonId="slider" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type} to={this.state.to}
              />
              </CardBody>
          </Card>

          <Card>
            <CardBody>
            <CardTitle>Select amount with a drop down control...</CardTitle>
              <MoneyButtonDonate display="dropdown" buttonId="dropdown" 
                devMode={this.state.DevMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                type={this.state.type} to={this.state.to}
              />
              </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
