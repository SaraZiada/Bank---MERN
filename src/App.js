import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Transactions from './components/Transactions';
import BreakDown from './components/Breakdown';

class App extends Component{
  constructor(){
    super()
    this.state=[
      { amount: 3200, vendor: "Elevation", category: "Salary" },
      { amount: -7, vendor: "Runescape", category: "Entertainment" },
      { amount: -20, vendor: "Subway", category: "Food" },
      { amount: -98, vendor: "La Baguetterie", category: "Food" }
    ]
  }
  render(){
    return (
      <Router>
        
        <div className="App">
        <NavBar />
        <div id="main-routes">
          <Routes>
            <Route path="/" exact element={<Transactions transactions={this.state} />} />
            <Route path="/Breakdown" exact element={<BreakDown />} />
          </Routes>
        </div>

        </div>
      </Router>

    );
  }
}

export default App;
