import React from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/citiesActions'



class CitiesList extends React.Component{

        componentDidMount() {
            this.props.getCities();
          }
          render() {
            const ListCities = this.props.cities.map((ciudad) => <li key={ciudad._id}>{ciudad.name}</li> );
            return(
            <div> <ul> {ListCities} </ul> </div>
            )
       };
    }
const mapStateToProps = (state) => {
  return { 
      cities: state.cities}
};

export default connect(mapStateToProps, { getCities })(CitiesList);