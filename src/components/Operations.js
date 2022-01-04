import React, { Component } from 'react';
import '../styles/Operations.css'
class Operations extends Component {
    constructor(){
        super();
        this.state={
            vendor:"",
            category:"",
            amount:0
        }
    }
    handleVendor = (event) => {
        this.setState({vendor : event.target.value})
    }
    handleCategory = (event) => {
        this.setState({category : event.target.value})
    }
    handleAmount = (event) => {
        this.setState({amount : event.target.value})
    }
    deposit = () => {
        let error = this.validateInputs()
        if(error.length==0){
           this.props.addOperation({amount: parseInt(this.state.amount), category:this.state.category, vendor: this.state.vendor})
        }
        else{
            alert(error)
        }
    }

    withdraw = () =>{
        let error = this.validateInputs()
        if(error.length==0){
            this.props.addOperation({amount: this.state.amount*-1, category:this.state.category, vendor: this.state.vendor})
        }
         else{
             alert(error)
         }
    }
    validateInputs(){
        let msg =""
        if(this.state.category.length==0){
            msg += "Enter Category\n"
        }
        if(this.state.vendor.length==0){
            msg += "Enter Vendor\n"
        }if(this.state.amount <= 0){
            msg +="Enter a Positive number for Amount"
        }
        return msg;
    }
    render(){
        return(
            <div id="newOperatorForm">
                <input type="text" placeholder='Vendor' value={this.state.vendor} onChange={this.handleVendor} required />
                <input type="text" placeholder='Category' value={this.state.category} onChange={this.handleCategory} required />
                <input type="number" placeholder='Amount' value={this.state.amount} onChange={this.handleAmount} required />
                <div className='Operations-buttons'>
                    <button onClick={this.deposit}>Deposit</button>
                    <button onClick={this.withdraw}>Withdraw</button>
                </div>
            </div>
        );
    }
}
export default Operations;