import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { Form } from "react-bootstrap"
import { update_admin, error_admin } from "../../../actions/adminActions"
import AcceptButton from "../../../components/accept-button/accept-button"
import CancelButton from "../../../components/cancel-button/cancel-button"
import PasswordField from "../../../components/password-field/password-field"
import Title from "../../../components/title/title"
import { makeRequest } from "../../../api/generalApi"
import { toast } from 'react-toastify';

const UpdateAdmin = props => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({
        first_name: props.admin.first_name,
        last_name: props.admin.last_name,
        new_password:"",
        confirm:"",
        current_password:""
    });
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [msg, setMsg] = useState([]);
    const toggle = props.toggle

    const Send = (event) => {
        event.preventDefault();
        if(validation()) {
            const data = setValues()

            let options = {
                method: "put", 
                actionSuccessful: update_admin,
                actionError: error_admin,
                url: "admin/management/",
                toastId: "updateAdmin",
                admin: props.admin,
                inputs: inputValue,
                data: data
            }
            
            dispatch(makeRequest(options))
            toast.success("Loading", {toastId: "updateAdmin"});
            toggle()
        }
    };

    const validation = values => {
        let msg = []
        setMsg([])

        if( inputValue.new_password !==  inputValue.confirm) {
            msg.push("new password isn't equal with confirm password")
        }

        if(JSON.stringify(msg) !== JSON.stringify([])) {
            setMsg(msg)
            return false
        }

        return true
    }

    const setValues = () =>{
        let formData = new FormData()
        Object.keys(inputValue).map((key) => {
            return formData.set( key, inputValue[key])
        })
        return formData
    }

    const changeInput = (event) => {
        let newValue = {...inputValue}
        newValue[event.target.name] = event.target.value
        setInputValue(newValue)
        let enableButton = Object.keys(newValue)
            .map(k => !Boolean(newValue[k]))
            .includes(true)

        setInputValue(newValue)
        setDisableSubmit(enableButton)
    }

    const cancel = window.innerWidth < 576 ? (
        <CancelButton border  onClick={props.toggle}>
            Cancel
        </CancelButton>
    ) : (
        <div>
            <a href="/#">Need help?</a>
        </div>
    ) 

    return (
        <>
            <Title>Change my admin account</Title>
            <Form>
            <div id="AdminFormButtons">
                <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={changeInput}
                    value={inputValue.first_name }
                    className="border-dark border-2 mb-4"
                />
                <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={changeInput}
                    value={inputValue.last_name}
                    className="border-dark border-2 mb-4"
                />
            </div>
            <Form.Control
                type="email"
                name="email"
                placeholder="Email" 
                onChange={changeInput}
                value={props.admin.email}
                className="border-dark border-2 mb-4"
                disabled={true}
            />
            <p>Change password?</p>
            <PasswordField
                name="new_password"
                placeholder="Password"
                onChange={changeInput}
                value={inputValue.password}
            />
            <PasswordField
                name="confirm"
                placeholder="Confirm Password"
                onChange={changeInput}
                value={inputValue.confirm}
            />
            <p>Current password</p>
            <PasswordField
                name="current_password"
                placeholder="Confirm Password"
                onChange={changeInput}
                value={inputValue.confirm}
            />
            {msg ? msg.map(m => <p>{m}</p>) : null}
                <div id="AdminFormButtons">
                    {cancel}
                    <AcceptButton border disabled={disableSubmit} onClick={Send}>
                        Update Admin
                    </AcceptButton>
                </div>
            </Form>
        </>
    )
}

export default UpdateAdmin