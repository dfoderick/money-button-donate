import React, {Component} from 'react'
import axios from 'axios'

class Receipt extends Component {
    state = {
        transaction: null
    }

    componentDidMount () {
        axios.get(`https://rest.bitcoin.com/v1/transaction/details/${this.props.txid}`)
        .then(response => this.setState({transaction: JSON.stringify(response['data'], null, 2)}))
        .catch(error => {
          this.setState({transaction: []});
          console.error(error);
        });

    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }
    render () {
        let tx = [];
        let vout1 = null;
        if (this.state.transaction) {
            tx = JSON.parse(this.state.transaction);
            vout1 = tx['vout'][0];
        }
        return (
            <div>
            <div>txid: {this.props.txid}</div>
            <div>time: {this.timeConverter(tx['time'])}</div>
            <div>value: {vout1 ? vout1['value']: '?'}</div>
            <div>fees: {tx['fees']}</div>
            <div>addresses: {vout1 ? vout1['scriptPubKey']['addresses']: '?'}</div>
            <div>confirmations: {tx['confirmations']}</div>

            {/* <div>{this.state.transaction}</div> */}
            </div>
        );
    }
}

export default Receipt;
