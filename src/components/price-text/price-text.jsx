import React from 'react';
import './price-text.css'

const Price = (props) => {
  return (
    <p className="text-orange price-text"> {typeof props.price == "number" ? props.currency ? props.currency + " $" + Number(props.price/100).toFixed(2) : "$" + Number(props.price/100).toFixed(2)  :"NaN"} </p>
  );
};

export default Price;
