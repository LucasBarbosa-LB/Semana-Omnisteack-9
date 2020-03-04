import React from 'react';
import './App.css';
import logo from "./assets/logo.svg";


function App() {
  return (
    <div className="container">
      <img src={logo}  alt="AirCNC"/>

    <div className="content">
      <p>
        Ofereça <strong>Spots</strong> e encontre <strong> talentos </strong> para sua empresa
      </p>

      <form >
          <label htmlFor="email">E-Mail *</label>

          <input 
          type="email"
          id="email"
          placeholder="Seu melhor E-mail"  
          />

          <button className="btn" type="submit">Entrar</button>

      </form>

    </div>


    </div>
    
    );  
  }

export default App;
