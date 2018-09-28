import React, {Component} from 'react'
import MoneyButton from '@moneybutton/react-money-button'

class MoneyButtonDonate extends React.Component {

    // constructor(props) {
    //     super(props);
    //     //this.state.amount = props.defaultAmount;
    // }

    static defaultProps = {
        ...Component.defaultProps,
        currency: "USD",
        type: 'tip',
        labelMoneyButton: 'Slide to Donate',
        labelReference: 'Order Number',
        labelAmount: 'Amount',
        maxAmount: 100,
        minAmount: .01
    }

      state = {
        amount: "0.01",
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
        console.log(msg);
    }

    // mbOnErrorCallback = (error) => {
    //     alert(error);
    // }
    // onError = {this.mbOnErrorCallback}

    render() {
        //let amt = process.env.REACT_APP_DONATE_AMOUNT;
        //opReturnData="money-button-donation"
        console.log(this.state.reference);
        let amt = this.state.amount;
        let dsp = this.props.display;
        // const configProps = {to:this.props.to, amount:amt, currency:this.state.currency};
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
                        <input type="number" value={amt} onChange={this.handleChangeAmount} 
                        min={this.props.minAmount} max={this.props.maxAmount} step="0.01" size="100px"></input>
                    </div>
                </div>
                ) : null}
                {dsp === 'slider' || !dsp ? (
                <div style={{float:"left", padding:"5px"}}>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        {this.props.labelAmount}
                    </div>
                    <div style={{...this.styleFont}}>
                        <input type="range" min={this.props.minAmount} max={this.props.maxAmount} 
                            id="donationamount" step=".01"
                            list="amounts"
                            value={this.state.amount}
                            onChange={this.handleChangeAmount}></input>
                    </div>
                </div>
                ) : null}
                <div style={{float:"left"}}>
                    <MoneyButton
                    to={this.props.to}
                    amount={amt}
                    currency={this.props.currency}
                    type={this.props.type}
                    label={this.props.labelMoneyButton}
                    opReturn={this.props.devMode ? null : this.state.reference}
                    onPayment={this.mbOnPaymentCallback}
                    buttonId = {this.props.buttonId}
                    devMode={this.props.devMode}
                    />
                </div>
            </div>
        )
    }
}

export default MoneyButtonDonate;