import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const accessLevelState = useSelector(state => state.authenticationState);
  const [signupState, setSignupState] = useState({ first_name:"" , last_name:"" , email:"" , password:"", confirm:"", accepted: false });  

  //const [signupState, setSignupState] = useState({});  

  useEffect(() => {

  }, [accessLevelState])

  const setValues = (signupValues) =>{
    let formData = new FormData()
    Object.keys(signupValues).map((key) => {
      return formData.append( key, signupValues[key])
    })
    return formData
  }

  const Send = (signupValues) => {
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

  const clusterSignup = (event) => {
    event.preventDefault();
    return Send(signupState)
  }

  return (admin ? <FormAdmin onClick={clusterSignup} values={signupState} /> :
    <FormUser onClick={clusterSignup} set={setSignupState} values={signupState}  />) 
};

export default Signup;
