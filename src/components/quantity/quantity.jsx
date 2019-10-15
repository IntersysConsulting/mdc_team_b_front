import React, {useState, useEffect } from "react";
import "./quantity.css";

const QuantityButton = props => {
  return (
    <div
      className={"value-button " + props.className}
      id={props.idVal}
      onClick={() => props.onClick()}
    >
      {props.symbol}
    </div>
  );
};

const Quantity = (props) =>{
  const [quantityValue, setValue] = useState(props.quantity)
  const [isDebouncing, setDebouncing] = useState(false)
  const [debounceTimer, setDebounceTimer] = useState(0)
  const [productValues] = useState({
    product_id: props.id
  })
  const callUpdate = props.onChange;

  useEffect(()=> {
    if(isDebouncing){
      if(debounceTimer<=800){
        setTimeout(()=>{
          setDebounceTimer(debounceTimer+100)
        },100)
      }
      else{
        setDebouncing(false);
        callUpdate(productValues.product_id, quantityValue);      
      }
    }
  }, [debounceTimer, callUpdate, productValues, quantityValue, isDebouncing])

  const startClock = () => {
    setDebouncing(true)
    setDebounceTimer(0);
  }

  const decrease = () => {
    if(!isDebouncing){
      startClock()
    }
    else{
      setDebounceTimer(0);
    }

    let val = quantityValue;
    if(typeof(val) !== 'number') {
      val = 0;
    }
    val < 1 ? (val = 0) : (val--);
    if(val === 0) {
      alert("You can't have 0 of a product, use delete instead");
      val = 1;
    }
    setValue(val);
  };

  const increase = () => {
    if(!isDebouncing){
      startClock()
    }
    else{
      setDebounceTimer(0)
    }

    let val = quantityValue;
    if(typeof(val) !== 'number') {
      val = 1;
    }
    val > 99999 ? (val = 99999) : (val++);
    setValue(val);
  };

  const changeVal = event => {
    if(!isDebouncing){
      startClock()
    }
    else{
      setDebounceTimer(0)
    }

    let val = parseInt(event.target.value, 10);
    if(isNaN(val) || val <= 0) {
      alert("You can't have 0 of a product, use delete instead");
      val = 1;
    }
    if(val > 99999)
      val = 99999;
    else if (val < 0)
      val = 0;
    setValue(val);
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
          value={quantityValue}
          onChange={changeVal}
        />
        <QuantityButton
          className="value-button-right bg-dark text-white"
          idVal="increase"
          symbol="+"
          onClick={increase}
        />
      </div>
  )

};

export default Quantity;
