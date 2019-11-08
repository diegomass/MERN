import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import home from '../img/homeIcon.png';
import CitiesList from '../comp/CitiesList'

class Cities extends React.Component{
  render() {
    return (   
      <div>
        <div>
        <img src={logo} className="App-logo" alt="logo"/>  
        </div>
        <div>
        <CitiesList />
        </div>
        <nav>
        <a href="/"><img src={home} className="App-home" alt="home"/></a>
        </nav>
      </div>
  )};
}

export default Cities;