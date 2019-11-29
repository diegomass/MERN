import React from 'react';
import { connect } from 'react-redux';
import {getItineraries} from '../actions/itineraryActions';
import Activities from './Activities'
import logo from '../img/MYtineraryLogo.png';
import cities from '../img/cities.png';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from "react-router-dom"

class Itineraries extends React.Component {
  
  

componentDidMount() {
    this.props.getItineraries(this.props.match.params.id);
  }

render() {
  
  let cityitineraries = this.props.itineraries.itineraries
  console.log(cityitineraries)
  //let cityname = cityitineraries.name
  let listcity = cityitineraries.map((itinerary) => {
  return <div>
        <ListGroup.Item key={itinerary._id}>
          <h1>{itinerary.title}</h1>
          <p>Likes: {itinerary.rating} | {itinerary.duration} | {itinerary.price}</p>
          {itinerary.hashtag}
        </ListGroup.Item>
        </div>
  });
  console.log(listcity)  
        return(
        <div>
            <img src={logo} className="App-logo" alt="logo"/>  
            <h1>"city name"</h1>
            <p>Avaible MYtineraries:</p>
            <h1>{listcity}</h1>
            <Activities />
            <Link to="/Cities"><img src={cities} className="App-cities" alt="cities"/></Link>
        </div>
        );
}
}
const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries
  }  
}

export default connect(mapStateToProps, { getItineraries })(Itineraries);