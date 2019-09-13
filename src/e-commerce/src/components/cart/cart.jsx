import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import cart_actions from '../../actions/cartActions';
import './cart.css';

const Cart = (props) => {

  const [items, setItems] = useState('items');
  const dispatch = useDispatch();
  const GetItems = () => dispatch(cart_actions())

  const onClick = () => {
    console.log(items);
  }

  return (
    <div className="cart-container" onClick={props.onClick}>
      <h1 className={'text-green cart-text ' + props.isOverNine}>
        {props.displayText}
      </h1>
      <p className={props.isOverNine} onClick={onClick}>{props.tooltipText}</p>
    </div>
  );
};

export default Cart;