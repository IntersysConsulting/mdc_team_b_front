import React, { useState } from "react";
import DemoButton from "./demos/demo-button";
import DemoStatus from "./demos/demo-status";
import DemoCards from "./demos/demo-cards";
import DemoAddress from "./demos/demo-address";
import "./App.css";

const App = () => {
  const defaultAlerts = true;

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoCards></DemoCards>
      <DemoAddress></DemoAddress>
    </div>
  );
};

export default App;
