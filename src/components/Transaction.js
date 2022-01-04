import React, { Component } from 'react';
import '../styles/Transaction.css'
class Transaction extends Component {
    constructor(){
        super()
    }
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }
    render(){
        return(
            
            <div className='transaction'>
                <span>{this.props.transaction.vendor}</span>
                <span>{this.props.transaction.category}</span>
                <span  style = { this.props.transaction.amount > 0 ? { backgroundColor:'lightgreen'} :  { backgroundColor:'crimson'} }>{this.props.transaction.amount}</span>
                <button id="delete" onClick={this.deleteTransaction}>DELETE</button>
            </div>
        );
    }
}
export default Transaction;