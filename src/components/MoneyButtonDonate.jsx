import React, {Component} from 'react'
import MoneyButton from '@moneybutton/react-money-button'
import { Button } from 'reactstrap';
import { TwitterShareButton } from 'react-twitter-embed';
// import {
//     TwitterShareButton, TwitterIcon
//   } from 'react-share';

class MoneyButtonDonate extends React.Component {

    static defaultProps = {
        ...Component.defaultProps,
        currency: "USD",
        type: 'tip',
        labelMoneyButton: 'Slide to Donate',
        labelReference: 'Order Number',
        labelAmount: 'Amount',
        maxAmount: 100,
        minAmount: .01,
        showTransaction: false,
        showSocialMedia: false,
        hashTag:""
    }

    state = {
        isDebug: false,
        debugTxid: "50eac9fafcbb060779f37bca4e54f5ff5e179656ba6bd2788530de7e89b62047",
        amount: "",
        reference: "",
        isAfterSwipeSuccess: false,
        lastPayment:""
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
        const msg = JSON.stringify(payment)
        console.log(msg);
        this.setState({isAfterSwipeSuccess: true});
        this.setState({lastPayment: payment});
    }

    mbOnErrorCallback = (error) => {
        // alert(error);
        this.setState({isAfterSwipeSuccess: false});
    }

    clickTransaction = () => {
        let txid = "invalid";
        if(this.state.lastPayment && this.state.lastPayment.hasOwnProperty('txid')) {
            txid = this.state.lastPayment["txid"];
        } else if (this.state.isDebug) {
            txid = this.state.debugTxid;
        }
        window.open(`https://explorer.bitcoin.com/bch/tx/${txid}`, '_blank');
    }

    render() {
        //let amt = process.env.REACT_APP_DONATE_AMOUNT;
        console.log(this.state.reference);
        let amt = this.state.amount || this.props.defaultAmount || "0.01";
        let amtInput = this.state.amount || this.props.defaultAmount;
        let dsp = this.props.display;
        return (
            <div style={{"minWidth":"450px"}}>
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
                        <input type="number" value={amtInput} onChange={this.handleChangeAmount} 
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
                        <div style={{position:"relative", display:"inline-block", verticalAlign:"top", margin:"1px"}}>
                        {this.state.isDebug || (this.state.isAfterSwipeSuccess && this.props.showTransaction) ? (
                            <div style={{padding:"1px"}}>
                            <Button onClick={this.clickTransaction} style={{height:"30px", width:"75px", padding:"3px"}}>Receipt</Button>
                            </div>
                        ):null}
                        {this.state.isDebug || (this.state.isAfterSwipeSuccess && this.props.showSocialMedia) ? (
                            <div style={{padding:"1px"}}>
                            <TwitterShareButton
                                url={'https://moneybutton.com'}
                                options={{ text: '#moneybutton is awesome', size: 'large' }}
                                />
                             </div>
                        ):null}
                        </div>
                </div>
            </div>
        )
    }
}

export default MoneyButtonDonate;