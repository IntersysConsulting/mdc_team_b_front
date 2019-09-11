import React from 'react';
import Cart from './cart.jsx';
// import CartContainer as Cart from ".../container/cart/cart.js"; // This line doesn't quite work

const CartDemo = (props) => {
  const CartClick = () => {
    alert('You clicked on a cart!');
  };

  const elements = [-100, 0, 1, 2, 3, 5, 6, 7, 8, 9, 12345];
  const items = [];

  for (const [k, v] of elements.entries()) {
    items.push(
        <div className="col">
          <Cart
            key={k}
            value={v}
            onClick={props.alerts ? CartClick : undefined}
          ></Cart>
        </div>
    );
  }

  return (
    <div>
      <h1>Cart Demo</h1>
      <h5>
        Demo is currently broken because of container implementation (Review the
        code of /components/cart/demo.jsx)
      </h5>
      <div className="row">{items}</div>
    </div>
  );
};

export default CartDemo;
