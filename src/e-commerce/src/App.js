import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import CartDemo from "./components/cart/demo.jsx";
import AcceptButtonDemo from "./components/accept-button/demo.jsx";
import DeleteButtonDemo from "./components/delete-button/demo.jsx";
import CancelButtonDemo from "./components/cancel-button/demo.jsx";
import AddButtonDemo from "./components/add-button/demo.jsx";
import EditButtonDemo from "./components/edit-button/demo.jsx";
import ChangeViewButtonDemo from "./components/change-view-button/demo.jsx";
import ManageInfoButtonDemo from "./components/manage-info-button/demo.jsx";
import AcceptButton from "./components/accept-button/accept-button.jsx";
function App() {
  const [alerts, setAlerts] = useState(true);

  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          right: 0,
          zIndex: 1
        }}
      >
        <AcceptButton
          onClick={() => {
            setAlerts(!alerts);
          }}
          className={alerts ? "bg-green" : "bg-red"}
        >
          {alerts ? "Alerts are ON" : "Alerts are OFF"}
        </AcceptButton>
      </div>
      <AcceptButtonDemo alerts={alerts}></AcceptButtonDemo>
      <AddButtonDemo alerts={alerts}></AddButtonDemo>
      <CancelButtonDemo alerts={alerts}></CancelButtonDemo>
      <CartDemo alerts={alerts}></CartDemo>
      <ChangeViewButtonDemo alerts={alerts}></ChangeViewButtonDemo>
      <DeleteButtonDemo alerts={alerts}></DeleteButtonDemo>
      <EditButtonDemo alerts={alerts}></EditButtonDemo>
      <ManageInfoButtonDemo alerts={alerts}></ManageInfoButtonDemo>
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
