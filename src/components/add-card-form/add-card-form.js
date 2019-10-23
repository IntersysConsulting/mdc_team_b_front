import React, {useState, useEffect} from 'react';
import axios from "axios";
import {CardElement, injectStripe} from 'react-stripe-elements';
import AcceptButton from '../accept-button/accept-button';
import "./add-card-form.css"

const AddCardForm = (props) => {
  const [errorMessage, setErrorMessage] = useState( {message: ""}  );


  const submit = async (e) => {
    let {token} = await props.stripe.createToken({name: "Name"});
    console.log(token.id)
    axios
      .put(process.env.REACT_APP_API_URL + "/payment/cards", { card_token: token.id }, 
      { headers: { authorization: "Bearer " + localStorage.getItem("access_token") } } )
      .then(response => {
        console.log(response);
      })
      .catch( (error) => {
        console.log(error)
    });
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