import React from 'react';
import Price from './price-text';

const PriceDemo = (props) => {
  return (
    <div>
      <h1>Price Demo</h1>
      <Price price={15000}/>
      <Price price={1}/>
      <Price price={1500000}/>
      <Price price={30}/>
      <Price price={'what'}/>
    </div>
  );
};

export default PriceDemo;
