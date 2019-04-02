import React, { Component } from 'react';
import './App.scss';

import {Link, Switch, Route} from 'react-router-dom';

import Popin from './components/Popin.js';

import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Profile from './components/auth/Profile.js';
import AuthService from './components/auth/auth-service.js';
import Detailsprof from './components/auth/Detailsprof';
import Myprofil from './components/auth/Myprofil';
import Board from './components/auth/Board';
import Reservation from './components/auth/Reservation';
import Homepage from './components/auth/Homepage'

class App extends Component {
  /* state = {
    user: null
  };

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null ) {
      this.service.loggedin()
        .then(response => this.setState({user: response}))
        .catch(err => this.setState({user: false}))
      ;
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  } */

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}>

          <Switch>
            <Route exact path="/" render={() => (
              <Homepage/>
            )} />

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/detailsprof" render={(props) => (
              <Detailsprof/>
            )} />

            <Route exact path="/myprofil" render={(props) => (
              <Myprofil/>
            )} />

            <Route exact path="/reservation" render={(props) => (
              <Reservation/>
            )} />

            <Route exact path="/board" render={(props) => (
              <Board/>
            )} />

          </Switch>

          

          
        </div>
      )} />
    );
  }
}

export default App;
