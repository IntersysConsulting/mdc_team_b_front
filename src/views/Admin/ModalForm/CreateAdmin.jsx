import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form } from "react-bootstrap"
import { create_admin, error_admin } from "../../../actions/adminActions"
import AcceptButton from "../../../components/accept-button/accept-button"
import CancelButton from "../../../components/cancel-button/cancel-button"
import Title from "../../../components/title/title"
import { makeRequest } from "../../../api/generalApi"
import { toast } from 'react-toastify';

const CreateAdmin = props => {
    const dispatch = useDispatch()
    const admins = useSelector(store => store.adminState)
    const [inputValue, setInputValue] = useState({ first_name:"", last_name:"", email:"" });  
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [msg, setMsg] = useState([]);
    const toggle = props.toggle
    const { initial } = props

    useEffect(() => {
        if( admins.admins.length !== initial) {
            toggle()
        }
    },[admins, initial, toggle])

    const Send = (event) => {
        event.preventDefault();
        if(validation()) {
            const data = setValues()

            let options = {
                method: "post", 
                actionSuccessful: create_admin,
                actionError: error_admin,
                url: "admin/management/",
                toastId: "createAdmin",
                newAdmin: inputValue,
                data: data
            }
            
            dispatch(makeRequest(options))
            toast.success("Loading", {toastId: "createAdmin"});
        }
    };

    const validation = values => {
        let { email } = inputValue
        let msg = []
        setMsg([])

        if( !(/\w+@\w+\.\w+/.test(email)) ) {
            msg.push("Please, type the right format in the email")
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
          <Title>Create admin account</Title>
          <Form> 
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
            <Form.Control
              type="email"
              name="email"
              placeholder="Email" 
              onChange={changeInput}
              value={inputValue.email}
              className="border-dark border-2 mb-4"
            />
            {msg ? msg.map(m => <p>{m}</p>) : null}
            <div id="AdminFormButtons">
              {cancel}
              <AcceptButton border disabled={disableSubmit} onClick={Send}>
                  Create Admin
              </AcceptButton>
            </div>
          </Form>
        </>
    )
}

export default CreateAdmin