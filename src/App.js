import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import logo from './LogoCouchUp.jpg';
import PicLayout from './PicLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center><img src={logo} style={{width:450,height:150}}/></center>
        <Navbar/>
        <PicLayout/>
      </div>
    );
  }
}

export default App;
