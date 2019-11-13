import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import home from '../img/homeIcon.png';
import CitiesList from '../comp/CitiesList';
//import Filter from '../comp/Filter';
import { connect } from 'react-redux';
import { getCities } from '../actions/citiesActions';
import PropTypes from 'prop-types';

class Cities extends React.Component{
  /*componentDidMount(){
    this.props.getCities();
}*/
  render() {
    //const { city } = this.props.cities
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
/*
Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  cities: state.cities
});

export default connect(mapStateToProps, { getCities })(Cities);*/
export default Cities;