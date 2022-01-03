import React, { Component } from 'react';
class Transaction extends Component {
    render(){
        return(
            <div className='transaction'>
                vendor: {this.props.transaction.vendor} - category: {this.props.transaction.category} | {this.props.transaction.amount}₪
            </div>
        );
    }
}
export default Transaction;