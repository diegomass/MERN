//import { GET_ITINERARIES } from './types';

export const getItineraries = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/cities/${id}`)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          dispatch({type: 'GET_ITINERARIES', itineraries: result})
        })
        .catch(err => console.log(err));
    }
}

export default getItineraries