export const getUsers = (newUser) => {
    console.log(newUser)
    return () => {
        fetch("http://localhost:5000/City")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}

export default getUsers




// fetch('http://localhost:5000/models/city', 
//             { 
//                 method: 'post', 
//                 headers: {'Content-Type':'application/json' }, 
//                 body: JSON.stringify({newUser})
//             })
//             .then(response => response.json())
//             .catch(error => console.error('Error:', error))
//         // .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             dispatch({type: 'GET_USERS', users: result})
//         })
//         // .catch(e => console.log(e));