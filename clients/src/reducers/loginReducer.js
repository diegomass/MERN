import { GET_LOGIN } from '../actions/types';

const initialState = {
    login: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LOGIN:
            return Object.assign({}, state, {login: action.login});
          default:
              return state;  
    }
}