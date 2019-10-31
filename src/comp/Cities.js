import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import home from '../img/homeIcon.png';

class Cities extends React.Component{
  render() {
    return (   
      <div>
        <div>
        <img src={logo} className="App-logo" alt="logo"/>  
        </div>
        <h1>Cities</h1>
        <h2>Buenos Aires</h2>
        <h2>Madrid</h2>
        <h2>Nueva York</h2>
        <h2>Milan</h2>
        <nav>
        <a href="/"><img src={home} className="App-home" alt="home"/></a>
        </nav>
      </div>
  );
  }
}


export default Cities;