import { GET_USERS } from '../actions/types';

const initialState = {
    users: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return Object.assign({}, state, {users: action.users});
          default:
              return state;  
    }
}