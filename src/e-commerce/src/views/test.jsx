import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{process.env.REACT_APP_API_URL}<code>src/App.js</code> and save to reload.</p>
    </div>
  );
}

export default Test;
