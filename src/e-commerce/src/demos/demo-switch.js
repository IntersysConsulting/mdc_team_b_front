import React, { useState } from "react";
import Switch from "../components/2WordSwitch/Switch";

const DemoSwitch = () => {
  const [demoState, setDemoState] = useState({ isOn: false });

  const flipSwitch = e => {
    setDemoState({ isOn: !demoState.isOn });
  };
  return (
    <div>
      <h1>Switch Demo</h1>
      <Switch
        leftWord="Physical"
        rightWord="Digital"
        onClick={flipSwitch}
        isOn={demoState.isOn}
      />
    </div>
  );
};

export default DemoSwitch;
