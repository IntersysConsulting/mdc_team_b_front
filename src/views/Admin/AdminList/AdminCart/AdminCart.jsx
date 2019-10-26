import React, { useState } from "react"
import "./AdminCart.css"
import Person from "./person.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { makeRequest } from "../../../../api/generalApi"
import { delete_admin, error_admin }  from "../../../../actions/adminActions"
import { toast } from 'react-toastify';
import Alert from "../../../../components/alert/alert"

const AdminCart = props => {
   const dispatch = useDispatch()
   const [ showAlert, setShowAlert ] = useState(false)

    const deleteAdminModal = () => {
        setShowAlert(!showAlert)
    }
    const deleteAdmin = () => {
       let data = new FormData()
       data.append("id", props.admin._id)
        let options = {
            method: "delete",
            rol: "admin",
            actionSuccessful: delete_admin,
            actionError: error_admin,
            url: "admin/management/",
            admin: props.admin,
            data: data
        }
        dispatch(makeRequest(options))
        toast("Deleting", {toastId: "deleteAdmin"})
    }

    return (
        <>
            {showAlert ? 
            <Alert 
                show={showAlert}
                handleShow={deleteAdminModal}
                confirmAction={deleteAdmin}
                yes="Yes"
                no="No"
            >
                <div id="adminCart-delete">
                Are you sure you wish to <br/>
                delete <span>
                { " " + props.admin.first_name
                +" "+ props.admin.last_name + " "}</span>
                as admin? <br/>
                This action <span>cannot</span> be undone
                </div>
            </Alert>
            :null }
            <div id="adminCart" key={props.admin.first_name}>
            <div id="adminCart-icon">
                <img src={Person} alt="Icon Admin"/>
            </div>
            <div id="adminCart-personalInformation">
                <div>
                    {props.admin.first_name +" "+ props.admin.last_name }
                </div>
                <div className="adminCart-email">
                    {props.admin.email}
                </div>
            </div>
            { props.current ?
                <button id="adminCart-button" onClick={() => props.toggle("update", props.admin)}> 
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                :
                <button id="adminCart-button" onClick={deleteAdminModal}> 
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            }
        </div>
        </>
    )
}

export default AdminCart