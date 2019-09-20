// Example of how to implement this component:
// <Switch leftWord="Filter" rightWord="Sort"/>

import React, { useState, useEffect } from "react";
import "./switch.css";

const Switch = props => {
  const [switchState, setSwitchState] = useState({ isOn: props.isOn });

  useEffect(
    e => {
      console.log(props.isOn);
      setSwitchState({ isOn: props.isOn });
    },
    [props.isOn]
  );

  //   const handleToggle = () => setValue(!value);

  return (
    <div onClick={props.onClick}>
      <input
        checked={switchState.isOn}
        onChange={props.onClick}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />

      <label className="react-switch-label" htmlFor="react-switch-new">
        <h3 id="switch-left-parameter" className="inLine">
          {props.leftWord}
        </h3>
        <h3 id="switch-mid-parameter" className="inLine">
          {" "}
          |{" "}
        </h3>
        <h3 id="switch-right-parameter" className="inLine">
          {props.rightWord}
        </h3>
        <span className="react-switch-button" />
      </label>
    </div>
  );
};

export default Switch;
