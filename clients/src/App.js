import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './comp/Navbar';
import Cities from './comp/Cities';
import Log from './comp/Log';
import Account from './comp/Account';
import './App.css';
import './index.css';





class App extends React.Component{
  constructor(props){
    this.state = {
      isFetching: false,
      cities: ['1']};
    }
  render() {
    return (
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
  );
  }
}
export default App;