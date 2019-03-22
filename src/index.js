import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (window.location.protocol !== "https:") {
    window.location =
      "https://" + window.location.hostname + window.location.pathname + window.location.hash;
}