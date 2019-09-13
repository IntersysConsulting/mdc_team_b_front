import React, { useState } from "react";
import DemoButton from "./demos/demo-button";
import DemoStatus from "./demos/demo-status";
import DemoAddress from "./demos/demo-address";
import "./App.css";

const App = () => {
  const defaultAlerts = true;
  const [appState, setAppState] = useState({ alerts: defaultAlerts });

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoAddress></DemoAddress>
    </div>
  );
};

export default App;
