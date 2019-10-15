import React from 'react';
//import {useDispatch, useSelector} from 'react-redux';
//import {cartActions} from '../../actions/cartActions';
import {Link} from  'react-router-dom';
import './cart.css';

const Cart = (props) => {

  //const items = useSelector((state) => state.cartState.errors);
  //const dispatch = useDispatch();
  //const getItems = () => dispatch(cartActions())

  return (
    <Link to={'/cart'} className="cart-icon-link">
      <div className="cart-container">
        <h1 className={'text-green cart-text ' + props.isOverNine}>
          {props.displayText}
        </h1>
        <p className={props.isOverNine ? "cart-tooltip" : "hidden"}>
          {props.tooltipText}
        </p>
      </div>
    </Link>    
  );
};

export default Cart;