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
          <h1> Programmer</h1>
          <h2> votre premier cours avec Antonin </h2>
          <h3>Quelle est la matière du cours ? </h3>
          <form action="/login" method="POST" id="">
            <div>
              <label for="wanteddate"></label>
              <input className="inputbox" id="wanteddate" type="text" name="wanteddate" placeholder="Choisis ton jour"/>
            </div>
          </form>

          <button className="btn">Suivant</button>

      </div>
    )
  };
}