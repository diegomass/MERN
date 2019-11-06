import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import home from '../img/homeIcon.png';
import CitiesList from '../comp/CitiesList'

const CITIES_SERVICE_URL = 'localhost:5000/cities';

class Cities extends React.Component{
  render() {
    return (   
      <div>
        <div>
        <img src={logo} className="App-logo" alt="logo"/>  
        </div>
        <div>
        {CitiesList}
        </div>
        <nav>
        <a href="/"><img src={home} className="App-home" alt="home"/></a>
        </nav>
      </div>
  )};
}
componentDidMount(); {
  this.fetchCities()
}

fetchCities = () => {
  this.setState({...this.state, isFetching: true})
  fetch(CITIES_SERVICE_URL)
    .then(response => response.json())
    .then(result => this.setState({cities: result, 
                                   isFetching: false}))
    .catch(e => console.log(e));
}

export default Cities;