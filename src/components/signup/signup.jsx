import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormAdmin from "./FormAdmin/FormAdmin"
import FormUser from "./FormUser/FormUser"
import {
  authentication_error,
  save_user
} from "../../actions/authenticationCreator"
import { makeRequest } from "../../api/generalApi"

import "./signup.css";

const Signup = ({admin}) => {
  const dispatch = useDispatch()
  const [signupState, setSignupState] = useState({});


  const setValues = (signupValues) =>{
    let formData = new FormData()
    Object.keys(signupValues).map((key) => {
      return formData.set( key, signupValues[key])
    })
    return formData
  }

  const Send = (event, signupValues = signupState) => {
    event.preventDefault();
    const data = setValues(signupValues)
    let options = {
      method: "post", 
      actionSuccessful: save_user,
      actionError: authentication_error,
      data: data
    }
  
    if(admin) { 
      dispatch(makeRequest({...options, url: "admin/management/"}))
    } else {
      dispatch(makeRequest({...options, url: "customers/"}))
    }
  }

  return (admin ? <FormAdmin onClick={Send} values={signupState} /> :
    <FormUser onClick={Send} set={setSignupState} values={signupState}  />) 
};

export default Signup;