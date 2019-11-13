//import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from './types';

export const getCities = (payload) => {
    return (dispatch) => {
        fetch('http://localhost:5000/cities')
        .then(response => response.json())
        .then(result => dispatch({type: 'GET_CITIES', payload: result}))
        .catch(e => console.log(e));
    }
}