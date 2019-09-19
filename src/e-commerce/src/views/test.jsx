import React from 'react';
import '../App.css';
import Alert from '../components/alert/alert';

function Test() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>{process.env.REACT_APP_API_URL}<code>src/App.js</code> and save to reload.</p>
      <Alert mainButtonTitle="Log out" no="Cancel" yes="Yes" children="Are you sure you want to log out?" url="/app"/>
    </div>
  );
}

export default Test;
