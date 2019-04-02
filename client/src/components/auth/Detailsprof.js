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
          <form action="/login" method="POST" id="">
            <div>
              <label for="searchbar"></label>
              <input className="inputbox" id="searchbar" type="text" name="searchbar" placeholder="    Recherche"/>
            </div>
          </form>
          <img className="menu" src="/menu.svg"/>
        </div>
        <div className="content-box">
          <div className="favinfo">
            <h4>Paris 75008</h4>
            <img className="favprof" src="./favprof.png"/>
          </div>
          <img className="profpicture" src="/prof/français.png" height="300"/>
          <h1> Alice </h1>
          <h2>Parcours </h2>
          <p>Blablabla avec les expériences </p>

          <button className="btn">Reserver un cours</button>

        </div>
      </div>
       

    )
  };
}