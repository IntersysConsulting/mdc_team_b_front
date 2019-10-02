// Example of how to insert this component:
// import Checkbox from '../components/checkbox/Checkbox';
// <Checkbox text = "Are you human?" />
// This checkbox should return a TRUE or FALSE statement

import React, { useState, useEffect } from "react";
import "./checkbox.css";
import "../../custom.scss";

const Checkbox = props => {
  const [checkboxState, setCheckboxState] = useState({
    checked: props.checked
  });
  useEffect(
    e => {
      setCheckboxState({ checked: props.checked });
    },
    [props.checked]
  );

  return (
    <label className={"checkbox-container " + props.className}>
      {props.children}
      <input
        name={props.name}
        type="checkbox"
        id={props.id}
        onClick={props.onClick}
        defaultChecked={checkboxState.checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
