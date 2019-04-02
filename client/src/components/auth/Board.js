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
          <h1>Tableau de Bord</h1>
          <img className="menu" src="/menu.svg"/>
        </div>

        <div className="content-box">
          <div className="userinfos">
            <img className="edit-logo" src="/logo-user.png" height="220"/>
            <h2> Sarobidy </h2>
            <h4> Avenue de la Pompadour </h4>
          </div>

          <div className="content-box-infos">
            <div className="infosg">
              <h2>Informations générales</h2>
              <img className="logo-infos" src="/logo-book.png" height="120"/>
              <p>Nom : Mahasoa </p>
              <p>Prénom : Sarobidy</p>
              <p>E-mail : s.mahasoa@hotmail.fr</p>
            </div>

            <div className="adresse">
              <h2>Adresses</h2>
              <img className="logo-infos" src="/logo-location.png" height="100"/>
              <p>45 rue Pierre Paul Jacques </p>
              <p>Ville : Paris </p>
            </div>
          </div>

          <div className=" userannonce">
              <h2>Mes annonces</h2>
              <img className="logo-annonce" src="/logo-annonce.png" height="120"/>
              <h3>Cours de maths</h3>
              <p>Blablabla sur le cours </p>
            </div>
        </div>
          
          
       

      </div>
    )
  };
}