import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Transactions from './components/Transactions';
import BreakDown from './components/Breakdown';
import Operations from './components/Operations';

class App extends Component{
  constructor(){
    super()
    this.state={
      transactions: [
      { id:"1", amount: 3200, vendor: "Elevation", category: "Salary" },
      { id:"2", amount: -7, vendor: "Runescape", category: "Entertainment" },
      { id:"3", amount: -20, vendor: "Subway", category: "Food" },
      { id:"4", amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      balance: 0
    }
  }
  setBalance = () => {
    let sum =0;
    this.state.transactions.forEach(t => sum += t.amount)
    this.setState({balance : sum})
  }
  componentDidMount(){
    this.setBalance()
    // this.setState({balance : this.setBalance()})
  }
  addOperation = (operation) => {
    let oldLength ,newLength;
    let transactions = [...this.state.transactions]
    oldLength = transactions.length
    transactions.push(operation)
    newLength = transactions.length
    this.setState({transactions: transactions},function(){
      this.setBalance()
    })
  }

  deleteTransaction = (id) => {
    let transactions = [...this.state.transactions]
    const indx = transactions.findIndex(t => t.id === id);
    transactions.splice(indx, indx >= 0 ? 1 : 0);
    this.setState({transactions: transactions},function(){
      this.setBalance()
    })

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
