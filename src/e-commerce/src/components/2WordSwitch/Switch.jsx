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
    <>
      <input
        checked={switchState.isOn}
        onChange={props.onClick}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />

      <label className="react-switch-label" htmlFor="react-switch-new">
        <h3 id="switch-left-parameter" className="switch-text">
          {props.leftWord}
        </h3>
        <h3 id="switch-mid-parameter" className="switch-text">
          {" "}
          |{" "}
        </h3>
        <h3 id="switch-right-parameter" className="switch-text">
          {props.rightWord}
        </h3>
        <span className="react-switch-button" />
      </label>
    </>
  );
};

export default Switch;
