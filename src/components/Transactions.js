import React, { Component } from 'react';
import Transaction from './Transaction';
import '../styles/Transactions.css'
class Transactions extends Component {
    render(){
        return(
            <div className='transactions'>
                <div className='transaction-header'>
                    <span>Vendor</span>
                    <span>Category</span>
                    <span>Amount (₪)</span>
                </div>
                {this.props.transactions.map(t => <Transaction key={t._id} transaction={t} deleteTransaction={this.props.deleteTransaction}/>)}
            </div>
        );
    }
}
export default Transactions;