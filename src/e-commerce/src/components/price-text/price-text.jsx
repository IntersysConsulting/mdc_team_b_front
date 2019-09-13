import React from 'react';

const Price = (props) => {
  return return (
    <p className="text-orange price-text"> {typeof props.price == Number?props.price/100:""} </p>
  );
};

export default Price;
