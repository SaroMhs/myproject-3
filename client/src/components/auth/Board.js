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
          <h1> Board </h1>
        </div>
      </div>
    )
  };
}