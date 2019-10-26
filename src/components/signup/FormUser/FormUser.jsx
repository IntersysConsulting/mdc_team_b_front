import React, {useState, useEffect} from "react"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import Logo from "../../layout/logo/logo-blanco.png";
import PasswordField from "../../../containers/password-field/password-field.js";
import AcceptButton from "../../accept-button/accept-button.jsx";
import Checkbox from "../../checkbox/Checkbox";
import Alert from "../../alert/alert"

const FormUser = props => {
 const [disableSubmit, setDisableSubmit] = useState(true)
 let setValues = props.set

 let [messages, setMessages] = useState([])

 useEffect(() =>{
  let valuesInput = {first_name: "", last_name:"", email: "", password:"", confirm: "", accepted:false }  
  setValues(valuesInput) 
 },[setValues])   

  const changeInput = ({target}) => {
      let {name, value} = target
      let newValue = {...props.values}

      if (name === "accepted") {
        newValue[name] = !newValue[name]
      } else {
        newValue[name] = value
      }

      let enableButton = Object.keys(newValue)
        .map(k => !Boolean(newValue[k]))
        .includes(true)

      props.set(newValue)
      setDisableSubmit(enableButton)
  }

  const sendUser = (event) => {
    event.preventDefault();
    if(validation(props.values)) {
      props.onClick()
    }
  }

  const validation = values => {
    let {password, confirm, email} = values
    let msg = []

    if( !(/\w+@\w+\.\w+/.test(email)) ) {
      msg.push("Insert the right format in the email")
    }

    if ( password !== confirm ) {
      msg.push("it doesn't match password and confirm password")
    }

    if(msg.length > 0 ) {
      setMessages(msg)
      return false
    }

    return true
  }

  return (
    <>
      { messages.length  > 0   ?  
        <Alert error show={true} confirmAction={() =>  setMessages([])}>
          {messages.map(m => <ul><li key={m}>{m}</li></ul>)}
        </Alert>
        : null
      } 
      <div className="signup-holder"> 
      <div className="signup-card border-dark">
        <img alt="logo"  className="signup-header px-4 mt-4 mb-4" src={Logo}></img>
        <Form.Group className="px-4" controlId="formBasicEmail">
          <div className="signup-fullname mb-4">
            <Form.Control
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={changeInput}
              value={props.values.first_name}
              className="border-dark border-2"
              required
            />
            <span className="signup-span"/>
            <Form.Control
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={changeInput}
              value={props.values.last_name}
              className="border-dark border-2 px-4"
              required
            />
          </div>
          <div className="signup-row">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeInput}
              value={props.values.email}
              className="border-dark border-2 mb-4"
              required
            />
            <PasswordField placeholder="Password" name="password" value={props.values.password} onChange={changeInput} />
            <PasswordField placeholder="Confirm Password" name="confirm" value={props.values.confirm} onChange={changeInput} />
            <Checkbox checked={props.values.accepted} onClick={changeInput} name="accepted" className="signup-checkbox" required >
              I have read and accept <Link  className="text-orange" to={'/terms'}>Terms of service</Link>.
            </Checkbox>
            <div className="signup-footer mb-2">
              <AcceptButton
              disabled={disableSubmit}
              type="submit" 
              activate={props.values.accepted}
              className="signup-button border-dark"
              onClick={sendUser}>
                Sign Up
              </AcceptButton>
            </div>
          </div>
        </Form.Group> 
        <div className="mb-4 px-4 signup-textlogin">
          <Link to={"/login"} className="signup-login text-indigo">
            Already have an account?  Log in instead!
          </Link>
        </div>
      </div>
      <div className="signup-link-holder">
        <Link to={"/help"} className="text-dark text-help">
          Help
        </Link>
        <Link to={"/conditions"} className="text-dark text-conditions">
          Conditions
        </Link>
        <Link to={"/privacy"} className="text-dark text-privacy">
          Privacy
        </Link>
      </div>
    </div> 
    </>
  );
}

export default FormUser