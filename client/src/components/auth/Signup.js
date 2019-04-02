import React from 'react';

import {Link} from 'react-router-dom';

import Popin from '../Popin.js';
import AuthService from './auth-service.js';

export default class extends React.Component {
  render (){
    return (
      <div>
        <div className="navbar">

          <img className="logo" src="/logo.png"/>
          <img className="menu" src="/menu.svg"/>

        </div>

        <div className="content-box">
            <h1> Devenez membre </h1>
            <form action="/login" method="POST" id="" className="form-box">
              <div>
                <label for="prenom"></label>
                <input className="inputbox" id="prenom" type="text" name="prenom" placeholder="Prénom"/>
              </div>
              <br/>
              <div>
                <label for="nom"></label>
                <input className="inputbox" id="nom" type="text" name="nom" placeholder="Nom"/>
              </div>
              <br/>
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
            <button className="btn">S'inscrire</button>
        </div>
      </div>
    )
  };
  /* state = {
    username: "",
    password: "",
    campus: "",
    course: ""
  }

  service = new AuthService();

  handleSubmit = (event) => {
    event.preventDefault();

    this.service.signup(this.state.username, this.state.password)
      .then(() => {
        this.service.edit(this.state.username, this.state.campus, this.state.course)
        .then(response => {
          this.props.updateUser(response);
          this.props.history.push('/');
        })
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
          <h1>Sign up</h1>
          
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

            <p>
              <label>
                <em>TEST</em>
                <select name="campus" value={this.state.campus} onChange={this.handleChange}>
                  <option value=""></option>
                  <option value="Madrid">Madrid</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Miami">Miami</option>
                  <option value="Paris">Paris</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Amsterdam">Amsterdam</option>
                  <option value="México">México</option>
                  <option value="Sao Paulo">Sao Paulo</option>
                </select>
              </label>
            </p>

            <p>
              <label>
                <em>Course</em>
                <select name="course" value={this.state.course} onChange={this.handleChange}>
                  <option value=""></option>
                  <option value="WebDev">WebDev</option>
                  <option value="UX/UI">UX/UI</option>
                  <option value="Data Analytics">Data Analytics</option>
                </select>
              </label>
            </p>

          </form>

          <p>
            <small>If you already have an account, you can login from <Link to="/login">here</Link></small>
          </p>

        </>
      )} two={(
        <>
          <p>
            <strong>Hello!!</strong>
            Welcome to IronProfile!
          </p>
          
          <p>
            <small>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</small>
            <button className="btn" onClick={this.handleSubmit}>Create the account</button>
          </p>
        </>
      )} />
    );
  } */
}