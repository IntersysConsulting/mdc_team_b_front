import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCardAction } from "../../actions/paymentActions";
import {CardElement, injectStripe} from 'react-stripe-elements';
import AcceptButton from '../accept-button/accept-button';
import "./add-card-form.css"

const AddCardForm = (props) => {
  const [errorMessage, setErrorMessage] = useState( {message: ""}  );
  const role = useSelector(state => state.authenticationState.role);
  const order_id = useSelector(state => state.checkoutState.order._id);
  const dispatch = useDispatch();

  const decideStripeAction = () => {
    (role === "registeredUser")
    ? saveCardUser()
    : finishGuestOrder()
  }

  const saveCardUser = async () => {
    try{
      let {token} = await props.stripe.createToken({name: "Name"});
      dispatch(addCardAction(token.id));
    }
    catch(error){
      alert("Looks like there's something wrong");
    }
  }

  const finishGuestOrder = async () => {
    try{
      let {token} = await props.stripe.createToken({name: "Guest"});
      const stripeInfo = {
        card_id : token.id,
        order_id : order_id
      }
      console.log("Guest: ", stripeInfo);
      props.finishOrder(stripeInfo);
    }
    catch(error){
      alert("Looks like there's something wrong");
    }
  }

    return (
      <div className="container-fluid">
        <div className="CardFormContainer row col-md-10 col-lg-6">
          <CardElement className="col-md-8 FormFields" onChange={
            (e) => { 
              e.error
              ? setErrorMessage( {message: e.error.message} )
              : setErrorMessage( {message: ""} )
            } 
          } />
          <AcceptButton className="col-md-2 SaveCard" onClick={decideStripeAction} >Save</AcceptButton>
          <p className="col-12 CardErrorMessage"> {errorMessage.message} </p>
        </div>
      </div>
    );
}

export default injectStripe(AddCardForm);