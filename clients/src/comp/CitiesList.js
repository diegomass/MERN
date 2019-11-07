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
        // class CitiesList = ({cities}) =>
        // cities.map(cities => <li key={cities}>{cities}</li>)

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
        const { cities } = this.state;
        return (
          <ul>
            {cities.map(City =>
              <li key={City.objectID}></li>
            )}
          </ul>
        );
      }
    }
    /*return <div> {class CitiesList { cities } =

        cities.map(cities => <li key={cities}>{cities}</li>)}
    }
     </div>*/

export default CitiesList;