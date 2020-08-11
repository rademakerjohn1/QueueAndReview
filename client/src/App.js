import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Queue from './components/Queue';
import Edit from './components/Edit';
import Library from './components/Library';
import View from './components/View';

function App() {
  return (
    <div id="wrapper">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/view" component={View} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
