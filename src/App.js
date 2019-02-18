import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import logo from './LogoCouchUp.jpg';
import PicLayout from './PicLayout';
import Carousel from './Carousel';
import Info from './Info';
import SearchBar from './SearchBar';
import Help from './Help';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center><img src={logo} style={{width:450,height:150}}/></center>
        <Navbar/>
        <center><SearchBar/></center>
        <center><Carousel/></center>
        <br/>
        <center><Help/></center>
        <br/>
        <PicLayout/>
        <br/>
        <center><Info/></center>
      </div>
    );
  }
}

export default App;
