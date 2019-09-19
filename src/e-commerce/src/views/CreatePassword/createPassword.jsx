import React,{ useState } from 'react';
import { useDispatch } from 'react-redux'
import Input from '../../components/input/Input'
import './createPassword.css'
import { fetchAuth } from '../../actions/authenticationCreator.jsx'
// import {log} from 'util';


function CreatePassword(props) {
  const email = props.match.params.user
  const code  = props.match.params.code

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
        email,
        password,
        code
      })
    }
  }

  return (
    <div className={"createPaswordContainer"}>
      <form onSubmit={submit} encType='application/json'>
        <Input
          placeholder='New Password'
          value={password}
          onChange={changePassword}
        />
        <Input
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={changeConfirm}
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default CreatePassword;
