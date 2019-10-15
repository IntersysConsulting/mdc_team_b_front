import React from 'react';
import '../payment-card/payment-card.css';
import icon from './icon.PNG';
import { useDispatch, useSelector } from 'react-redux';
import { updatePayment } from '../../actions/checkoutActions';

const PaymentCard = (props) => {

    const payment = useSelector((state) => state.checkoutState.order.payment)

    const dispatch = useDispatch();

    return (
        <div id="payment-card-whole">
            <label id="payment-card-button-container">
                <input type="radio"name="radio" onChange={() => dispatch(updatePayment(props.id))} defaultChecked={props.id === payment ? true : false}/>
                <span id="payment-card-button-checkmark"></span>
            </label>
            <div>
                <img id="payment-card-icon" src={icon} alt="icon" />
            </div>
            <div id="payment-card-number">
                {props.number}
            </div>
            <div id="payment-card-owner">
                {props.owner}
            </div>
        </div>
    );
}

export default PaymentCard;
