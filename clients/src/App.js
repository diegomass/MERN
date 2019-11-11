import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './comp/Navbar';
import Cities from './comp/Cities';
import Log from './comp/Log';
import Account from './comp/Account';
import './App.css';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component{

  /*state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };*/
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Switch>
            <Route path='/' exact component={Navbar} />
            <Route path='/Cities' component={Cities} />
            <Route path='/Log' component={Log} />
            <Route path='/Account' component={Account} />
      </Switch>
      </BrowserRouter>
      </div>
      </Provider> 
  );
  }
}
export default App;