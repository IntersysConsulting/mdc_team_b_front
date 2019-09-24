import React from "react";
import Checkbox from '../components/checkbox/Checkbox'

const CheckboxDemo = props => {

  return (
    <div>
      <h1>Checkbox Demo</h1>
      <div>
        <Checkbox text="Are you human?"/>
      </div>
    </div>
  );
};

export default CheckboxDemo;