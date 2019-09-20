import React, { useState } from "react";
import "./quantity.css";

const QuantityButton = props => {
  return (
    <div
      className={"value-button " + props.className}
      id={props.idVal}
      onClick={() => props.onClick()}
      value="Decrease Value"
    >
      {props.symbol}
    </div>
  );
};

const Quantity = props => {
  const [quantityState, setQuantityState] = useState({ value: 1 });

  const decrease = () => {
    let val = quantityState.value;
    val = isNaN(val) ? 0 : val;
    val < 1 ? (val = 1) : (val = val);
    val--;
    setQuantityState({ value: val });
    props.onChange();
  };

  const increase = () => {
    let val = quantityState.value;
    val = isNaN(val) ? 0 : val;
    val++;
    setQuantityState({ value: val });
    props.onChange();
  };

  const changeVal = event => {
    let val = event.target.value;
    val = isNaN(val) ? 0 : val;
    setQuantityState({ value: val });
    props.onChange();
  };

  return (
    <div className="quantity-container">
      <QuantityButton
        className="value-button-left bg-dark  text-white"
        idVal="decrease"
        symbol="-"
        onClick={decrease}
      />
      <input
        className="border-dark border-top border-bottom"
        type="number"
        id="number"
        value={quantityState.value}
        onChange={changeVal}
      />
      <QuantityButton
        className="value-button-right bg-dark text-white"
        idVal="increase"
        symbol="+"
        onClick={increase}
      />
    </div>
  );
};

export default Quantity;
