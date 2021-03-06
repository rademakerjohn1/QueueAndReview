import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Login from './pages/Login'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Logout from './components/Logout/Logout'
import Register from './pages/Register'
import Search from './pages/Search';
import Queue from './pages/Queue';
import EditAlbum from './components/EditAlbum/EditAlbum' 
import QueueAlbum from './components/QueueAlbum/QueueAlbum';
import Library from './pages/Library';
import LibraryAlbum from './components/LibraryAlbum/LibraryAlbum';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null
    }
  }

  componentDidMount() {
    axios.get("/user/checkAuthentication")
      .then(res => this.setState({ loggedIn: res.data }))
  }

  logout(event) {
    event.preventDefault()
    axios.get("/user/logout")
      .then(res => this.setState({ loggedIn: res.data }))
      .then(window.location = "/login")
  }

  render() {
    return (
      !this.state.loggedIn ?
        <div id="guest-wrapper">
          <Header />
          <Router>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Login} />
              <Route exact path="*" component={Login} />
            </Switch>
          </Router>
        </div >
      : <div id="wrapper">
      <Logout onClick={(event) => this.logout(event)} />
      <Header loggedIn={this.state.loggedIn}>
        <Nav />
      </Header>
      <Router>
        <Switch>
          <Route exact path="/register" component={Library} />
          <Route exact path="/login" component={Library} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Queue} />
          <Route exact path="/queue" component={Queue} />
          <Route exact path="/queue/album" component={QueueAlbum} />
          <Route exact path="/queue/album/edit" component={EditAlbum} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/library/album" component={LibraryAlbum} />
          <Route exact path="/library/album/edit" component={EditAlbum} />
        </Switch>
      </Router>
    </div>
    );
  }

}

export default App;
