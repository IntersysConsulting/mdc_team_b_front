// Example of how to implement this component:
// <Switch leftWord="Filter" rightWord="Sort"/>

import React, { useState, useEffect } from "react";
import "./switch.css";

const Switch = props => {
  const [switchState, setSwitchState] = useState({ isOn: props.isOn });

  useEffect(
    e => {
      setSwitchState({ isOn: props.isOn });
    },
    [props.isOn]
  );

  return (
    <h3 className="switch-text" onClick={props.onClick}>
      <span
        className={"switch-text-" + (!switchState.isOn ? "active" : "passive")}
      >
        {props.leftWord}
      </span>{" "}
      |{" "}
      <span
        className={"switch-text-" + (switchState.isOn ? "active" : "passive")}
      >
        {props.rightWord}
      </span>
    </h3>
  );
};

export default Switch;
