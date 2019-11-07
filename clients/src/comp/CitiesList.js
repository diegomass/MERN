import React from 'react';

const CITIES_SERVICE_URL = 'localhost:5000/cities';

class CitiesList extends React.Component{

    constructor(props){
        super();
        this.state = {
          isFetching: false,
          cities: null
        }
    }

        componentDidMount() {
            this.fetchCities()
          }
          
          fetchCities = () => {
            this.setState({...this.state, isFetching: true});
            fetch(CITIES_SERVICE_URL)
              .then(response => response.json())
              .then(result => {
                  this.setState({cities: result, isFetching: false});
                  console.log(this.state.cities);
                } )
              .catch(e => console.log(e));
          }

    render() {
        return (
          <ul>
            {CitiesList.map(_id =>
              <li key={_id.objectID}></li>
            )}
          </ul>
        );
      }
    }

export default CitiesList;