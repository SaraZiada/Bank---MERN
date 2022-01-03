import React, { Component } from 'react';
import Transaction from './Transaction';
class Transactions extends Component {
    render(){
        console.log(this.props.transactions)
        return(
            <div className='transactions'>
                {this.props.transactions.map(t => <Transaction transaction={t} />)}
            </div>
        );
    }
}
export default Transactions;