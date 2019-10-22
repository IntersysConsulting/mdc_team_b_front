import React,{ useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Title from "../../../components/title/title"
import AcceptButton from "../../../components/accept-button/accept-button";
import CancelButton from "../../../components/cancel-button/cancel-button";
import { makeRequest } from "../../../api/generalApi"
import { create_admin, error_admin } from "../../../actions/adminActions"
import "./SignupAdmin.css"

const SignupAdmin = props => {
  const dispatch = useDispatch();

  const [signupState, setSignupState] = useState({ first_name: "", last_name: "", email: ""  });
  
  const Send = (event,signupValues) => {
    event.preventDefault();

    const data = setValues(signupValues)
    let options = {
      method: "post", 
      actionSuccessful: create_admin,
      actionError: error_admin,
      url: "/admin/management/",
      data
    }
  
    dispatch(makeRequest(options))
  };

  const setValues = (signupValues) =>{
    let formData = new FormData()
    Object.keys(signupValues).map((key) => {
      return formData.append( key, signupValues[key])
    })
    return formData
  }

  const onChangeInput = event => {
    let newValue = {...signupState}
    newValue[event.target.name] = event.target.value
    setSignupState(newValue)
  };

  const viewSignupAdmin = (
    <>
      <Title>Create admin account</Title>
      <Form> 
        <Form.Control
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={onChangeInput}
          value={signupState.first_name }
          className="border-dark border-2 mb-4"
        ></Form.Control>
        <Form.Control
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={onChangeInput}
          value={signupState.last_name}
          className="border-dark border-2 mb-4"
        ></Form.Control>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email" 
          onChange={onChangeInput}
          value={signupState.email}
          className="border-dark border-2 mb-4"
        ></Form.Control>
        <div id="SignupAdminButton">
          <CancelButton border  onClick={props.cancel}>
              Cancel
          </CancelButton>
          <AcceptButton border onClick={Send}>
              Create Admin
          </AcceptButton>
        </div>
      </Form>
    </>
  )


let modalSignup = (
  <Modal show={props.show}>
    <div  id="SignupAdmin" >
      <Modal.Body>
        {viewSignupAdmin}
      </Modal.Body>
    </div>
  </Modal>
)

  return (
    <>
      { 
        props.width < 576 ? 
        viewSignupAdmin :
        modalSignup
      }
    </>
  )
}

export default SignupAdmin