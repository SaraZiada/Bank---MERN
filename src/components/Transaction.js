import React, { Component } from 'react';
import '../styles/Transaction.css'
class Transaction extends Component {
    render(){
        return(
            <div className='transaction'>
                <span>{this.props.transaction.vendor}</span>
                <span>{this.props.transaction.category}</span>
                <span>{this.props.transaction.amount}₪</span>
            </div>
        );
    }
}
export default Transaction;