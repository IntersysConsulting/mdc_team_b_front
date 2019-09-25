import React from 'react';
import QuantityDemo from '../components/quantity/demo.jsx';

const DemoQuantity = (props) => {
  return (
    <div className="container">
      <QuantityDemo alerts={props.alerts}></QuantityDemo>
    </div>
  );
};

export default DemoQuantity;