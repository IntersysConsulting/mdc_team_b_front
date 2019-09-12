import React, { useState } from "react";
import ToggleVisibilityButton from "./toggle-visibility-button.jsx";

const ToggleVisibilityButtonDemo = props => {
  const [demoState, setDemoState] = useState({ isOpen: false });

  const ToggleVisibility = () => {
    setDemoState({ isOpen: !demoState.isOpen });
  };

  return (
    <div>
      <h1>Toggle Visibility Button Demo</h1>
      <ToggleVisibilityButton
        open={demoState.isOpen}
        onClick={ToggleVisibility}
      ></ToggleVisibilityButton>
    </div>
  );
};

export default ToggleVisibilityButtonDemo;
