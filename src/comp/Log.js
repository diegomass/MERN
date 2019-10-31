import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import home from '../img/homeIcon.png';

class Log extends React.Component{
  render() {
    return (   
      <div>
        <div>
        <img src={logo} className="App-logo" alt="logo"/>  
        </div>
        <h1>Log In</h1>
        <h2>Usuario:</h2>
        <h2>Contraseña:</h2>
        <nav>
        <a href="/"><img src={home} className="App-home" alt="home"/></a>
        </nav>
      </div>
  );
  }
}


export default Log;