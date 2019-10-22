import React from "react"
import "./AdminCart.css"
import Person from "./person.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { makeRequest } from "../../../../api/generalApi"
import { delete_admin, error_admin }  from "../../../../actions/adminActions"

const AdminCart = props => {
   const dispatch = useDispatch()

   const deleteAdmin = () => {
       let data = new FormData()
       data.append("id", props.info._id)
        let options = {
            method: "delete", 
            actionSuccessful: delete_admin,
            actionError: error_admin,
            url: "admin/management/",
            data: data
        }
        dispatch(makeRequest(options))
   }

    return (
        <div id="adminCart" key={props.info.first_name}>
            <div id="adminCart-icon">
                <img src={Person} alt="Icon Admin"/>
            </div>
            <div id="adminCart-personalInformation">
                <div>
                    {props.info.first_name +" "+ props.info.last_name }
                </div>
                <div className="adminCart-email">
                    {props.info.email}
                </div>
            </div>
            <button id="adminCart-button" onClick={deleteAdmin}> 
            { props.current ?
                <FontAwesomeIcon icon={faEdit} /> :
                <FontAwesomeIcon icon={faTrash} />
            }
            </button>
        </div>
    )
}

export default AdminCart