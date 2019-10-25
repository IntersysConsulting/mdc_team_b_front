import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom"
import FormUser from "./FormUser/FormUser"
import {
  authentication_error,
  save_user
} from "../../actions/authenticationCreator"
import { makeRequest } from "../../api/generalApi"
import { toast } from 'react-toastify';
import "./signup.css";

const Signup = props => {
  const dispatch = useDispatch()
  const auth = useSelector(store => store.authenticationState) 
  const initialAuth = useState(auth)
  const [signupState, setSignupState] = useState({});

  useEffect(() => {
    if(JSON.stringify(auth) !== JSON.stringify(initialAuth[0])) {
      toast.success("Welcome!");
      props.history.push("/") 
    }
  },[auth, initialAuth, props.history])

  const setValues = (signupValues) =>{
    let formData = new FormData()
    Object.keys(signupValues).map((key) => {
      return formData.set( key, signupValues[key])
    })
    return formData
  }

  const Send = (signupValues = signupState) => {
    const data = setValues(signupValues)
    let options = {
      method: "post", 
      actionSuccessful: save_user,
      actionError: authentication_error,
      data: data
    }
  
    dispatch(makeRequest({...options, url: "customers/"}))
  }

  return (
    <FormUser
      onClick={Send}
      set={setSignupState}
      values={signupState}
    />
  ) 
};

export default withRouter(Signup);