import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from '../actions/types';

const initialState = {
    cities: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CITIES:
            return Object.assign({}, state, {cities: action.cities});
          default:
              return state;  
    }
}