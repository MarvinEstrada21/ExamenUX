import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import logo from './LogoCouchUp.jpg';
import PicLayout from './PicLayout';
import Carousel from './Carousel';
import Info from './Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center><img src={logo} style={{width:450,height:150}}/></center>
        <Navbar/>
        <center>
          <Carousel/>
        </center>
        <PicLayout/>
        <br></br>
        <center><Info/></center>
      </div>
    );
  }
}

export default App;
