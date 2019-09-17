import React, {useState} from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoCards from './demos/demo-cards';
import DemoPrice from './demos/demo-price';
import DemoQuantity from './demos/demo-quantity';
import DemoLayout from './demos/demo-layout';


import './App.css';

const App = () => {
  const defaultAlerts = true;
  const [appState, setAppState] = useState({alerts: defaultAlerts});

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoCards></DemoCards>
      <DemoPrice></DemoPrice>
      <DemoQuantity alerts={appState.alerts}></DemoQuantity>
      <DemoLayout></DemoLayout>
    </div>
  );
};

export default App;
