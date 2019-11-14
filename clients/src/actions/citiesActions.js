//import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from './types';

export const getCities = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/cities')
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            dispatch({type: 'GET_CITIES', cities: result})
        })
        .catch(e => console.log(e));
    }
}