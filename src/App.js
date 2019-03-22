import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Store from './Components/Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Home} exact/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Store" component={Store}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
