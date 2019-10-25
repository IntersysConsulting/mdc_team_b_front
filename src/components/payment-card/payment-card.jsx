import React from 'react';
import axios from "axios";
import '../payment-card/payment-card.css';
import icon from './icon.PNG';
import visa from './visa.png';
import mastercard from './mastercard.png';
import american from './american-express.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardAction } from "../../actions/paymentActions";
import { updatePayment } from '../../actions/checkoutActions';

const PaymentCard = (props) => {

    const payment = useSelector((state) => state.checkoutState.order.payment)
    const dispatch = useDispatch();

    let cardLogo;
    switch(props.brand){
        case("Visa"):
            cardLogo = visa;
        break;
        case("MasterCard"):
            cardLogo = mastercard;
        break;
        case("American Express"):
            cardLogo = american;
        break;
        default:
            cardLogo = icon;
    }

    const deleteCard = () => {
        dispatch(deleteCardAction(props.id));
    }

    return (
        <div id="payment-card-whole">
            <label id="payment-card-button-container">
                <input type="radio"name="radio" onChange={() => dispatch(updatePayment(props.id))} defaultChecked={props.id === payment ? true : false}/>
                <span id="payment-card-button-checkmark"></span>
            </label>
            <div>
                <img id="payment-card-icon" src={cardLogo} alt="icon" />
            </div>
            <div id="payment-card-number">
                **** **** {props.number}
            </div>
            <div id="payment-card-delete" onClick={deleteCard}>
                Delete
            </div>
        </div>
    );
}

export default PaymentCard;
