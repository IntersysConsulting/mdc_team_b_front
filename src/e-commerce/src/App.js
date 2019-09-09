import React from "react";
import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button block variant="info" value="Button">
        This is a button
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
