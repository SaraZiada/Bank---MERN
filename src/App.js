import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Transactions from './components/Transactions';
import BreakDown from './components/Breakdown';
import Operations from './components/Operations';
import $ from 'jquery';

class App extends Component{
  constructor(){
    super()
    this.state={
      transactions:[],
      balance: 0
    }
  }
  setBalance = () => {
    let sum =0;
    this.state.transactions.forEach(t => sum += t.amount)
    this.setState({balance : sum})
  }
  async componentDidMount(){
    this.initTransactions()
  }

  initTransactions = async () => {
    let transactions = await $.get('http://localhost:8888/transactions')
    this.setState({transactions},function(){
      this.setBalance()
    })
  }
  addOperation = async (operation) => {

    let newOperation = await $.post('http://localhost:8888/transaction',operation)
    let transactions = [...this.state.transactions]
    transactions.push(newOperation)
    this.setState({transactions: transactions},function(){
      console.log(this.state.transactions)
      this.setBalance()
    })
  }

  deleteTransaction = async (id) => {
    fetch('http://localhost:8888/transaction', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(result => {this.initTransactions()})


  }
  render(){
    return (
      <Router>
        
        <div className="App">
        <NavBar />
        <span className='balance'>Balance:{this.state.balance}₪</span>
        <div id="main-routes">
          <Routes>
            <Route path="/" exact element={<Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
            <Route path="/operations" exact element={<Operations transactions={this.state.transactions} addOperation={this.addOperation} />} />
            <Route path="/Breakdown" exact element={<BreakDown />} />
          </Routes>
        </div>

        </div>
      </Router>

    );
  }
}

export default App;
