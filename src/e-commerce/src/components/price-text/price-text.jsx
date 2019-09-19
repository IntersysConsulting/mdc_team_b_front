import React from 'react';
import './price-text.css'

const Price = (props) => {
  return (
    <p className="text-orange price-text"> {typeof props.price == "number" ? "$" + Number(props.price/100).toFixed(2)  :""} </p>
  );
};

export default Price;
