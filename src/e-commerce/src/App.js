import React, {useState} from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoCards from './demos/demo-cards';
import DemoPrice from './demos/demo-price.js';
import DemoLayout from './demos/demo-layout.js';
import DemoCheckout from './demos/demo-checkout.js';
import DemoLogin from './demos/demo-login.js';
import CheckboxDemo from './demos/demo-checkbox.js';
import AlertDemo from './demos/demo-alert.js';


import './App.css';
import DemoProduct from './demos/demo-product';

const App = () => {
  const defaultAlerts = true;

  return (
    <div className="App">
      <DemoLogin></DemoLogin>
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoCards></DemoCards>
      <DemoPrice></DemoPrice>
      <DemoLayout></DemoLayout>
      <DemoCheckout></DemoCheckout>
      <DemoProduct></DemoProduct>
      <CheckboxDemo/>
      <AlertDemo/>

    </div>
  );
};

export default App;
