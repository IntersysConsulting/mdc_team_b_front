import React, {useState} from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoCards from './demos/demo-cards';
import DemoPrice from './demos/demo-price.js';

import './App.css';

const App = () => {
  const defaultAlerts = true;

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoCards></DemoCards>
      <DemoPrice></DemoPrice>

    </div>
  );
};

export default App;
