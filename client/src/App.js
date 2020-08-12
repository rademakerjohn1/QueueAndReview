import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search';
import Queue from './pages/Queue';
import QueueAlbum from './components/QueueAlbum/QueueAlbum';
import Library from './pages/Library';
import LibraryAlbum from './components/LibraryAlbum/LibraryAlbum';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
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
