import React, {useState} from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoDrop from './demos/demo-dropdown';
import './App.css';

const App = () => {
  const defaultAlerts = true;
  const [appState, setAppState] = useState({alerts: defaultAlerts});

  return (
    <div className="App">
      <DemoButton></DemoButton>
      <DemoStatus></DemoStatus>
      <DemoDrop></DemoDrop>
    </div>
  );
};

export default App;
