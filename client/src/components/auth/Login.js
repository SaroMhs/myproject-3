import React from 'react';

import {Link} from 'react-router-dom';
import Popin from '../Popin.js';
import AuthService from './auth-service.js';

export default class extends React.Component {
  render (){
    return(
      <div >
        <div className="navbar">
          <img className="logo" src="/logo.png"/>
          <img className="menu" src="/menu.svg"/>
        </div>

        <div className="content-box">
        <h1> Connectez-vous </h1>
          <form action="/login" method="POST" id="">
            <div>
              <label for="email"></label>
              <input className="inputbox" id="email" type="text" name="email" placeholder="Email"/>
            </div>
            <br/>
            <div>
              <label for="password"></label>
              <input className="inputbox" id="password" type="password" name="password" placeholder="Mot de passe"/>
            </div>

          </form>
          <br/>
          <button className="btn">Se connecter</button>
        </div>
        
      </div>
    )
  }

  /* state = {
    username: "",
    password: ""
  }

  service = new AuthService();

  handleSubmit = (event) => {
    event.preventDefault();

    this.service.login(this.state.username, this.state.password)
      .then(response => {
        this.props.updateUser(response);
        this.props.history.push('/');
      })
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
      <Popin one={(
        <>
          <h1>Log in</h1>
          
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                <em>Username</em>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Password</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

          </form>

          <p>
            <small>If you don't have an account yet, you can create your account <Link to="/signup">here</Link></small>
          </p>
        </>
      )} two={(
        <>
          <p>
            <strong>Hello!!</strong>
            Awesome to have at IronProfile again!
          </p>
          
          <p>
            <small>If you login, you agree with all our terms and conditions where we can do whatever we want with the data!</small>
            <button className="btn" onClick={this.handleSubmit}>Log in</button>
          </p>
        </>
      )} />
    );
  } */
}