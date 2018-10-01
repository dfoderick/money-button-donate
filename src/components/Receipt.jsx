import React, {Component} from 'react'

class Receipt extends React.Component {
        //window.open(`https://explorer.bitcoin.com/bch/tx/${txid}`, '_blank');

    render () {
        return (
            <div>
            <div>receipt detail will go here</div>
            <div>{this.props.txid}</div>
            </div>
        );
    }
}

export default Receipt;
