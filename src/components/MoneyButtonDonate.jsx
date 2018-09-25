import React from 'react'
import MoneyButton from '@moneybutton/react-money-button'

class MoneyButtonDonate extends React.Component {
    
    state = {
        to: "145",
        amount: "1",
        currency: "USD",
        label: "Slide to Donate"
    };

    handleChangeAmount = event => {
        this.setState({ amount: event.target.value });
    }

    styleFont = {
        fontFamily: 'sans-serif'
      };

    mbOnErrorCallback = (error) => {
        alert(error);
    }

    render() {
        //let amt = process.env.REACT_APP_DONATE_AMOUNT;
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
                        Select donation
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
                    {/* <input type="text" value={amt} size="100px"></input> */}
                </div>
                ) : null}
                {dsp === 'slider' || !dsp ? (
                <div style={{float:"left", padding:"5px"}}>
                    <div style={{fontSize:"small", ...this.styleFont}}>
                        Select donation
                    </div>
                    <div style={{...this.styleFont}}>
                        <input type="range" min="1" max="100" id="donationamount"
                            list="amounts"
                            value={this.state.amount}
                            onChange={this.handleChangeAmount}></input>
                    </div>
                    {/* <input type="text" value={amt} size="100px"></input> */}
                </div>
                ) : null}
                <div style={{float:"left"}}>
                    <MoneyButton
                    to={this.state.to}
                    amount={amt}
                    currency={this.state.currency}
                    type="tip"
                    label={this.state.label}
                    onError = {this.mbOnErrorCallback}
                    />
                </div>
            </div>
        )
    }
}

export default MoneyButtonDonate;