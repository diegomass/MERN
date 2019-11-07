import React from 'react';
// import Componente from './Componente';

const CITIES_SERVICE_URL = 'http://localhost:5000/cities';

class CitiesList extends React.Component{
    state = {
        isFetching: false,
        cities: null
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
            <div>asd
                {console.log(this.state.cities)}
            </div>
        )
      };
    }

export default CitiesList;


// <div>
// <ul>
//     {/* <Componente name="asd"/> */}
   
//    { this.state.cities.map( (dato) =>
//     <li key={dato._id}></li>
//   )}
// </ul>
// </div>