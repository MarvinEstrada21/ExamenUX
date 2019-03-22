import React, { Component } from 'react';
import logo from '../LogoCouchUp.jpg';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Carousel from './Carousel';
import Help from './Help';
import PicLayout from './PicLayout';
import Info from './Info';

class Store extends Component {
    render() {
        return (
            <div>
                <center><img src={logo} style={{ width: 450, height: 150 }} /></center>
                <Navbar />
                <center><SearchBar /></center>
                <center><Carousel /></center>
                <br />
                <center><Help /></center>
                <br />
                <PicLayout />
                <br />
                <center><Info /></center>
            </div>
        );
    }
}

export default Store;