import React from 'react';

const CITIES_SERVICE_URL = 'localhost:5000/cities';

        const CitiesList = ({cities}) =>
        cities.map(cities => <li key={cities}>{cities}</li>)

        componentDidMount(); {
            this.fetchCities()
          }
          
          fetchCities = () => {
            this.setState({...this.state, isFetching: true})
            fetch(CITIES_SERVICE_URL)
              .then(response => response.json())
              .then(result => this.setState({cities: result, isFetching: false}))
              .catch(e => console.log(e));
          }



export default CitiesList;