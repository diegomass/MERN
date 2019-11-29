import { GET_ITINERARIES } from '../actions/types';

const initialState = {
    itineraries: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITINERARIES:
            return Object.assign({}, state, {itineraries: action.itineraries});
          default:
              return state;  
    }
}