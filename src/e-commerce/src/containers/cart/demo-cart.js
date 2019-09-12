import Cart from '../../components/cart/cart';
import React, {useState, useEffect} from 'react';

// This container must have the logic

const CartContainer = (props) => {
  const [cartState, setCartState] = useState({value: props.value});

  useEffect(() => {
    if (isNaN(Number(props.value))) {
      setCartState({value: 0});
    } else if (props.value > 99999) {
      setCartState({value: 99999});
    } else {
      setCartState({value: props.value});
    }
  });

  const toSmallText = (x) => {
    const m = parseInt(x);

    if (m <= 0 || isNaN(m)) {
      return '';
    } else if (m > 9) {
      return '9+';
    } else {
      return m;
    }
  };

  return (
    <Cart
      displayText={toSmallText(cartState.value)}
      tooltipText={cartState.value}
      isOverNine={cartState.value > 9}
      onClick={props.onClick}
    ></Cart>
  );
};

export default CartContainer;
