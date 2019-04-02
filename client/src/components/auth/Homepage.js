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
          <h1>Trouvez le professeur parfait</h1>
          <form action="/login" method="POST" id="" className="form-box">

              <div>
                <label for="matiere"></label>
                <input className="inputbox" id="matiere" type="text" name="matiere" placeholder="Quelle matière ? Essayez Maths, Piano, Danse.."/>
              </div>
              <br/>
              <div>
                <label for="adresseprof"></label>
                <input className="inputbox" id="adresseprof" type="text" name="adresseprof" placeholder="Adresse, ville ou quartier ?"/>
              </div>
              <br/>
            </form>
            <button className="btn">Rechercher</button>

            <div className="prof-example">
              <div>
                <img className="profpicture" src="/prof/piano.png"  height="170" />
                <p>Piano</p>
              </div>
              
              <div>
                <img className="profpicture" src="/prof/italien.png"height="170" />
                <p>Italien</p>
              </div>

              <div>
                <img className="profpicture" src="/prof/français.png"height="170" />
                <p>Français</p>
              </div>

              <div>
                <img className="profpicture" src="/prof/informatique.png" height="170"/>
                <p>Informatique</p>
              </div>
            </div>

            <div className="content-box-prof">
              <h5>48 577</h5>
              <h3> cours effectués par de fantastiques élèves le mois dernier</h3>
              <button className="btn-prof">Devenez professeur </button>
            </div>

        </div>
      </div>
    )
  };
}