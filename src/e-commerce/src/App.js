import React, { useState } from "react";
import DemoButton from "./demos/demo-button";
import DemoStatus from "./demos/demo-status";
import DemoCards from "./demos/demo-cards";
import DemoPrice from "./demos/demo-price";
import DemoQuantity from "./demos/demo-quantity";
import DemoLayout from "./demos/demo-layout";
import DemoCheckout from "./demos/demo-checkout";
import DemoLogin from "./demos/demo-login";
import DemoSwitch from "./demos/demo-switch";
import CheckboxDemo from "./demos/demo-checkbox";
import DemoProduct from "./demos/demo-product";

import DemoModals from "./demos/demo-modals.js";

import "./App.css";
const App = () => {
  const defaultAlerts = true;
  const [appState, setAppState] = useState({ alerts: defaultAlerts });

  return (
    <div className="App">
      <DemoLayout />
      <DemoModals />
      <DemoCards />
      <DemoCheckout />
      <DemoProduct />

      <DemoLogin></DemoLogin>
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>

      <DemoPrice></DemoPrice>
      <DemoQuantity alerts={appState.alerts}></DemoQuantity>
      <DemoSwitch />
      <CheckboxDemo />
    </div>
  );
};

export default App;
