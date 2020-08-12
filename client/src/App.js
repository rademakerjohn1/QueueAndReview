import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Queue from './components/Queue';
import QueueAlbum from './components/QueueAlbum';
import Library from './components/Library';
import LibraryAlbum from './components/LibraryAlbum';

function App() {
  return (
    <div id="wrapper">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/queue/edit" component={QueueAlbum} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/library/view" component={LibraryAlbum} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
