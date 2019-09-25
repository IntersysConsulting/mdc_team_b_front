import React from 'react';
import Quantity from './quantity';

const QuantityDemo = (props) => {
  const change = () =>{
    alert("You changed the quantity");
  }
  return (
    <div>
      <h1>Quantity Demo</h1>
      <Quantity onChange={change}/>
    </div>
  );
};

export default QuantityDemo;
