import React from 'react';

// import Componente from './Componente';

const CITIES_SERVICE_URL = 'http://localhost:5000/cities';

class CitiesList extends React.Component{
    constructor(props){ 
    super(props);
      this.state = {
        error: null,
        isFetching: false,
        cities: null
      };
    }
        async componentDidMount() {
            await this.fetchCities()
          }
          
          fetchCities =  () => {
            // await this.setState({...this.state, isFetching: true});
            fetch(CITIES_SERVICE_URL)
              .then(response => response.json())
              .then(result => {
                  this.setState({cities: result, isFetching: true});
                } )
              .catch(e => console.log(e));
          }

          render() {
            
            // const { error, isLoaded, cities } = this.state;
            
            // const error = false;
            if(!this.state.isFetching)
              return <div> Cargando </div>
            
            return(
              // (!this.state.isFetching) ? console.log( "sad ") : console.log(this.state.cities.map( ciudad => console.log(ciudad.name)))
            <div> {this.state.cities.map(ciudad => <li key={ciudad._id}>{ciudad.name}</li> )} </div>
            )

      //       if (error) {
      //         return <div>Error: {error.message}</div>;
      //       } else if (!this.state.isLoaded) {
      //       return <div> Cargando ...</div>;
      //       } else {
      //         console.log(this.state.isFetching)
      //         return (
                
      //             this.state.cities.map(ciudad => (
      //             <ul>
                    
      //               <li>{ciudad._id}</li>
      //               <li>{ciudad._id}</li>
      //               <li>{ciudad._id}</li>

      //             </ul>
      //           ))
                
                
      //         )}
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