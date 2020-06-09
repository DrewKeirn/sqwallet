import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// routes to components
import Navbar from "./components/navbar.component";
import Budget from "./components/budget.component";
import MortgageCalc from "./components/mortgage-calc.component";
import CompIntCalc from "./components/ci-calc.component";
import Account from "./components/account.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/budget" component={Budget} />
        <Route path="/mortgagecalc" component={MortgageCalc}/>
        <Route path="/cicalc" component={CompIntCalc}/>
        <Route path="/account" component={Account}/>
      </div>
    </Router>
  );
}

export default App;
