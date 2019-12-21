//import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from './types';

export const getLogin = (newLogin) => {
    console.log(newLogin)
    return (dispatch) => {
        fetch('http://localhost:5000/users/login',{ 
            method: 'POST', 
            //mode: 'no-cors',
            body: JSON.stringify(newLogin),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
        .then(response => response.json())
        .then(result => { localStorage.setItem('user', JSON.stringify(result));
        console.log(result)
            dispatch({type: 'GET_LOGIN', login: result})
        })
        .catch(e => console.log(e));
    }
}

export default getLogin
