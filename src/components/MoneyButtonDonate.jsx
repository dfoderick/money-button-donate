import React from 'react'
import MoneyButton from '@moneybutton/react-money-button'

class MoneyButtonDonate extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     //this.state.amount = props.defaultAmount;
    // }

    state = {
        to: "145",
        amount: "1",
        currency: "USD",
        reference: ""
    };

    handleChangeAmount = event => {
        this.setState({ amount: event.target.value });
    }
    handleChangeReference = event => {
        this.setState({ reference: event.target.value });
    }

    styleFont = {
        fontFamily: 'sans-serif'
      };

    mbOnPaymentCallback = (payment) => {
        const msg = "Do anything you want when the payment is successfull. " + JSON.stringify(payment)
        alert(msg);
    }

    // mbOnErrorCallback = (error) => {
    //     alert(error);
    // }
    // onError = {this.mbOnErrorCallback}

    render() {
        //let amt = process.env.REACT_APP_DONATE_AMOUNT;
        //opReturnData="money-button-donation"
        let amt = this.state.amount;
        let dsp = this.props.display;
        return (
            <div>
                <datalist id="amounts">
                <option value="1" label="$1"/>
                <option value="5"/>
                <option value="10"/>
                <option value="20" label="$20"/>
                <option value="25"/>
                <option value="50" label="$50"/>
                <option value="75"/>
                <option value="100" label="$100"/>
                </datalist>
                {dsp === 'dropdown' ? (
                <div style={{float:"left", padding:"5px"}}>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        {this.props.labelAmount}
                    </div>
                    <div style={{...this.styleFont}}>
                    <select value={amt} style={{width:"90px"}}
                        onChange={this.handleChangeAmount}>
                        <option value="1">$1</option>
                        <option value="5">$5</option>
                        <option value="10">$10</option>
                        <option value="20">$20</option>
                        <option value="50">$50</option>
                        <option value="75">$75</option>
                        <option value="100">$100</option>
                    </select>
                    </div>
                </div>
                ) : null}
                {dsp === 'input' ? (
                <div style={{float:"left", padding:"5px"}}>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        {this.props.labelReference}
                    </div>
                    <div style={{...this.styleFont}}>
                        <input type="text" maxLength="20" id="reference"
                            value={this.state.reference} size="15"
                            onChange={this.handleChangeReference}></input>
                    </div>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        {this.props.labelAmount}
                    </div>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        <input type="number" value={amt} onChange={this.handleChangeAmount} min="1.00" max="100000.00" step="0.01" size="100px"></input>
                    </div>
                </div>
                ) : null}
                {dsp === 'slider' || !dsp ? (
                <div style={{float:"left", padding:"5px"}}>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        {this.props.labelAmount}
                    </div>
                    <div style={{...this.styleFont}}>
                        <input type="range" min="1" max="100" id="donationamount"
                            list="amounts"
                            value={this.state.amount}
                            onChange={this.handleChangeAmount}></input>
                    </div>
                </div>
                ) : null}
                <div style={{float:"left"}}>
                    <MoneyButton
                    to={this.state.to}
                    amount={amt}
                    currency={this.state.currency}
                    type={this.props.type}
                    label={this.props.labelMoneyButton}
                    opReturnData={this.state.reference}
                    onPayment={this.mbOnPaymentCallback}
                    buttonId = {this.props.buttonId}
                    devMode={true}
                    />
                </div>
            </div>
        )
    }
}

export default MoneyButtonDonate;