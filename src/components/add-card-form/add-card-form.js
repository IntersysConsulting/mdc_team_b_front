import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCardAction } from "../../actions/paymentActions";
import {CardElement, injectStripe} from 'react-stripe-elements';
import AcceptButton from '../accept-button/accept-button';
import "./add-card-form.css"

const AddCardForm = (props) => {
  const [errorMessage, setErrorMessage] = useState( {message: ""}  );
  const dispatch = useDispatch();

  const submit = async (e) => {
    try{
      let {token} = await props.stripe.createToken({name: "Name"});
      dispatch(addCardAction(token.id));
    }
    catch(error){
      alert("Looks like there's something wrong with the input");
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
          <AcceptButton className="col-md-2 SaveCard" onClick={submit} >Save</AcceptButton>
          <p className="col-12 CardErrorMessage"> {errorMessage.message} </p>
        </div>
      </div>
    );
}

export default injectStripe(AddCardForm);