import React,{ useState } from 'react';
import { useDispatch } from 'react-redux'
import PasswordField from "../../containers/password-field/password-field.js";
import AcceptButton from "../../components/accept-button/accept-button";
import Title from "../../components/title/title";
import './createPassword.css'
import { fetchAuth } from '../../actions/authenticationCreator.jsx'
// import {log} from 'util';


function CreatePassword(props) {
  const code  = props.match.params.code
  const email  = props.match.params.email

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const sigin = (data) => dispatch(fetchAuth(data))

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const changeConfirm = (e) => {
    setConfirmPassword(e.target.value)
  }

  const submit = (event) => {
    event.preventDefault();
    if (password.trim() === '') return;
    if (confirmPassword.trim() === '') return;
    if (password === confirmPassword) {
      sigin({
        password,
        code,
        email
      })
    }
  }

  return (
    <div className={"createPaswordContainer"}>
      <form className={"createPassword-form"} encType='application/json'>
        <div className="col-12 createPassword-title">
          <Title >
            Reset your password
          </Title>
        </div>
        <PasswordField placeholder="Password" onChange={changePassword}></PasswordField>
        <PasswordField placeholder="Confirm Password" onChange={changeConfirm}></PasswordField>
        <div className="col-12">
          <AcceptButton onClick={submit} block>Done</AcceptButton>
        </div>

      </form>
    </div>
  );
}

export default CreatePassword;
