import React, { useState } from "react";
import DemoButton from "./demos/demo-button";
import DemoStatus from "./demos/demo-status";
import DemoCards from "./demos/demo-cards";
import DemoPrice from "./demos/demo-price.js";
import DemoLayout from "./demos/demo-layout.js";
import DemoCheckout from "./demos/demo-checkout.js";

import "./App.css";

const App = () => {
  const defaultAlerts = true;

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoCards></DemoCards>
      <DemoPrice></DemoPrice>
      <DemoLayout></DemoLayout>
      <DemoCheckout></DemoCheckout>
    </div>
  );
};

export default App;
