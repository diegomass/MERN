/*import { GET_LOGIN, LOGOUT } from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGOUT:
      return {};
    default:
      return state
  }
}*/