import React, { useState } from "react";
import Checkbox from "../components/checkbox/Checkbox";

const CheckboxDemo = props => {
  const [demoState, setDemoState] = useState({ checked: true });

  const flipCheckbox = e => {
    setDemoState({ checked: !demoState.checked });
  };

  return (
    <div>
      <h1>Checkbox Demo</h1>
      <div>
        <Checkbox
          checked={demoState.checked}
          onClick={flipCheckbox}
          text="Are you human?"
        />
      </div>
    </div>
  );
};

export default CheckboxDemo;
