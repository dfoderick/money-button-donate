import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Card, CardBody, CardTitle, Button, Input, Label } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MoneyButtonDonate from "./components/MoneyButtonDonate.jsx";
import { TwitterFollowButton } from 'react-twitter-embed';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import DonateToMe from './components/DonateToMe.jsx'
import axios from 'axios'

class App extends Component {

  state = {
    copied: false,
    devMode: true,
    type: "buy",
    to:"0",
    currency:"USD",
    defaultAmount: "",
    labelMoneyButton: "Slide to Donate",
    labelAmount: "Enter Amount",
    labelReference: "Order Number",
    configTransactionAfterPayment: false,
    configSocialMediaAfterPayment: false,
    buttonId:"",
    buttonData:"",
    clientIdentifier:"",
    hideAmount: false,
    showSliderLive: false,
    showDropDownLive: false,
    showInputLive: false,
    activeTab: 'common'
    }

  componentDidMount() {

    // let tokenKey="mb_js_client:oauth_access_token";
    // console.log(tokenKey);
    // if (localStorage.hasOwnProperty(tokenKey)) {
    //   let token = localStorage.getItem(tokenKey);
    //   console.log(token);
    //   //$oauth_client = new Oauth($consumerKey,$consumerSecret);
    //   axios.get('https://auth.moneybutton.com/oauth/v1/whoami')
    //     .then(response => this.setState({to:response["id"]}))
    //     .catch(error => {
    //       this.setState({to:0});
    //       console.error(error);
    //     });
    // } else {
    //   console.log("no token");
    // }

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      copied: false
    });
  };

  updateType = val => event => {
    if (event.target) {
      if (event.target.checked) {
        this.setState({
          type: val,
          copied: false
        });
      }
    }
  }

  toggleInput = () => {
    this.setState({
      showInputLive: !this.state.showInputLive
    });
    console.log("toggle input");
  }
  toggleSlider = () => {
    this.setState({
      showSliderLive: !this.state.showSliderLive
    });
  }
  toggleDropDown = () => {
    this.setState({
      showDropDownLive: !this.state.showDropDownLive
    });
  }

  toggleShowTransaction = () => {
    this.setState({
      configTransactionAfterPayment: !this.state.configTransactionAfterPayment
    });
  }

  toggleShowSocialMedia = () => {
    this.setState({
      configSocialMediaAfterPayment: !this.state.configSocialMediaAfterPayment
    });
  }

  styles = {
    padding: '3px'
  };

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

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
      <input type="number" min="0.01" max="100000.00" step="0.01" size="100px" onkeyup="return changeAmount(this, event);" id="pay-amount" name="pay-amount"></input>
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
          opReturn: reference,
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
        <div className="clearfix" style={{ padding: '.5rem' }}>
          <div className="float-left">
            <a target="blank" href="https://www.moneybutton.com"><img src={logo} className="App-logo" alt="logo" /></a>
            <h1 className="App-title">Customize your MoneyButton</h1>
          </div>
          <div className="float-right" style={{"padding":"5px"}}>
            <TwitterFollowButton screenName={'dfoderick'} />
          </div>
        </div>
        </header>
        <div style={{"alignText":"left", padding:"20px"}}>
          <div className="row">
            <div style={{"width":"50%"}}>
            <p>View source on GitHub <a href="https://github.com/dfoderick/money-button-donate">https://github.com/dfoderick/money-button-donate</a></p>
            </div>
          </div>
          <div>
            <div className="row">

            <Card style={{"width":"50%"}}>
              <CardBody>
              <CardTitle>Customize your Money Button</CardTitle>

              <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'common' })}
                  onClick={() => { this.toggleTab('common'); }}
                >
                  Common Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'advanced' })}
                  onClick={() => { this.toggleTab('advanced'); }}
                >
                  Advanced
                </NavLink>
              </NavItem>
            </Nav>

              <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="common">
            <Row>
              <Col sm="12">
              <div className="form-group form-inline" style={{"float":"left"}}>
            <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Type</label>
                <input type="radio" radioGroup="type" className="form-control" checked={this.state.type === 'tip'} onChange={this.updateType('tip')}></input> Tip
                &nbsp;
                <input type="radio" radioGroup="type" className="form-control" checked={this.state.type === 'buy'} onChange={this.updateType('buy')}></input> Buy
              </div>
              <div className="col-md-12 form-group alert" style={{...this.styles}} >
                <label className="col-sm-4 col-form-label" >Send to (User Number or address)</label>
                 <input type="text" className="form-control" 
                 required value={this.state.to} onChange={this.handleChange("to")}></input>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >Default Amount</label>
                 <input type="number" step="0.01" className="form-control" value={this.state.defaultAmount} onChange={this.handleChange("defaultAmount")}></input>
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
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="advanced">
            <Row>
              <Col sm="12">
              <div className="form-group form-inline" style={{"float":"left"}}>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" ></label>
                <Label check>
                  <Input type="checkbox" value={this.state.configTransactionAfterPayment} 
                  onChange={this.toggleShowTransaction}/>
                  {' '}
                  Show Receipt
                </Label>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" ></label>
                <Label check>
                  <Input type="checkbox" value={this.state.configSocialMediaAfterPayment} 
                  onChange={this.toggleShowSocialMedia}/>
                  {' '}
                  Show Social Media
                </Label>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >ButtonId</label>
                 <input type="text" className="form-control" value={this.state.buttonId} onChange={this.handleChange("buttonId")}></input>
              </div>
              
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >ButtonData</label>
                 <input type="text" className="form-control" value={this.state.buttonData} onChange={this.handleChange("buttonData")}></input>
              </div>
              <div className="col-md-12 form-group" style={{...this.styles}}>
                <label className="col-sm-4 col-form-label" >ClientIdentifier</label>
                 <input type="text" className="form-control" value={this.state.clientIdentifier} onChange={this.handleChange("clientIdentifier")}></input>
              </div>
              </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

              </CardBody>
            </Card>
            <Card style={{"width":"50%"}}>
                  <CardBody>
                    <CardTitle>
                      <CopyToClipboard text={code}
                        onCopy={() => this.setState({copied: true})}>
                        <button>Copy to clipboard</button>
                      </CopyToClipboard>
                      {this.state.copied ? <span style={{color: 'red'}}>{' '}Copied</span> : null}
                    </CardTitle>
                    <div>
                      <textarea id="mb-code" rows="10" cols="80" value={code} readOnly={true}>
                      </textarea>
                    </div>
                    </CardBody>
            </Card>
           </div>
           </div>
           <Alert color="primary">
              The following 3 examples of Money Button work in demo mode. That means NO FUNDS will be spent from your account.
            </Alert>
          <Card>
            <CardBody>
            <CardTitle>Select amount with a textbox...</CardTitle>
              <div className="row">
              <div style={{width:"50%"}}>
                <MoneyButtonDonate display="input"
                  devMode={this.state.devMode} labelMoneyButton={this.state.labelMoneyButton}
                  labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                  showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                  buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                  type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
                />
              </div>
              <Button color="danger" onClick={this.toggleInput} style={{height:"40px"}}>Try it Live!</Button>
              <Modal isOpen={this.state.showInputLive} toggle={this.toggleInput} size="lg" className={this.props.className}>
                <ModalHeader toggle={this.toggleInput}>This button is live! Use small amounts for testing</ModalHeader>
                <ModalBody>
                  <MoneyButtonDonate display="input"
                    devMode={false} labelMoneyButton={this.state.labelMoneyButton}
                    labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                    showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                    buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                    type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleInput}>Close</Button>
                </ModalFooter>
              </Modal>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
            <CardTitle>Select amount with a slider control...</CardTitle>
              <div className="row">
              <div style={{width:"50%"}}>
              <MoneyButtonDonate display="slider" 
                devMode={this.state.devMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
              />
              </div>
              <Button color="danger" onClick={this.toggleSlider} style={{height:"40px"}}>Try it Live!</Button>
              <Modal isOpen={this.state.showSliderLive} toggle={this.toggleSlider} size="lg" className={this.props.className}>
                <ModalHeader toggle={this.toggleSlider}>This button is live! Use small amounts for testing</ModalHeader>
                <ModalBody>
                  <MoneyButtonDonate display="slider"
                    devMode={false} labelMoneyButton={this.state.labelMoneyButton}
                    labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                    showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                    buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                    type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleSlider}>Close</Button>
                </ModalFooter>
              </Modal>
              </div>
              </CardBody>
          </Card>

          <Card>
            <CardBody>
            <CardTitle>Select amount with a drop down control...</CardTitle>
              <div className="row">
              <div style={{width:"50%"}}>
              <MoneyButtonDonate display="dropdown"
                devMode={this.state.devMode} labelMoneyButton={this.state.labelMoneyButton}
                labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
              />
              </div>

              <Button color="danger" onClick={this.toggleDropDown} style={{height:"40px"}}>Try it Live!</Button>
              <Modal isOpen={this.state.showDropDownLive} toggle={this.toggleDropDown} size="lg" className={this.props.className}>
                <ModalHeader toggle={this.toggleDropDown}>This button is live! Use small amounts for testing</ModalHeader>
                <ModalBody>
                  <MoneyButtonDonate display="dropdown"
                    devMode={false} labelMoneyButton={this.state.labelMoneyButton}
                    labelAmount = {this.state.labelAmount} labelReference = {this.state.labelReference}
                    showTransaction = {this.state.configTransactionAfterPayment} showSocialMedia = {this.state.configSocialMediaAfterPayment}
                    buttonId={this.state.buttonId} buttonData={this.state.buttonData} clientIdentifier={this.state.clientIdentifier}
                    type={this.state.type} to={this.state.to} defaultAmount={this.state.defaultAmount}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleDropDown}>Close</Button>
                </ModalFooter>
              </Modal>
              </div>
              </CardBody>
          </Card>
        </div>

        <DonateToMe></DonateToMe>
      </div>
    );
  }
}

export default App;
