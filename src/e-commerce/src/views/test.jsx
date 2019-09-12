import React from 'react';
import '../App.css';
import Description from '../components/product/description';

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{process.env.REACT_APP_API_URL}<code>src/App.js</code> and save to reload.</p>
      <Description description = {'ME GUSTAN LAS PUTAS'}></Description>
    </div>
  );
}

export default Test;
