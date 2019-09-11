import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Checkbox from '../components/checkbox/Checkbox';
import Description from '../components/product/description';
import Switch from '../components/physical-digital/Switch'

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch/>
      <Description description = "Esta es una descripcion" />
      <Checkbox text = "Are you human?"/>
      <p>{process.env.REACT_APP_API_URL}<code>src/App.js</code> and save to reload.</p>
    </div>
  );
}

export default Test;
