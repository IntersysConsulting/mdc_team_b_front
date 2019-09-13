import React from 'react';

const Price = (props) => {
  const validateAndRender = () => {
    if (Number.isInteger(props.price)) {
      const priceWithCents = props.price/100;
      return (
        <div>
          <h2 style={{color: 'orange', display: 'inline'}}>USD ${priceWithCents}</h2>
        </div>
      )
    } else {
      return <div></div>;
    }
  };

  return validateAndRender();
};

export default Price;
