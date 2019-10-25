import React,{ useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Modal } from "react-bootstrap"
import UpdateAdmin from "./UpdateAdmin"
import CreateAdmin from "./CreateAdmin"
import "./ModalForm.css"

const ModalForm = props => {
    const admins = useSelector(store => store.adminState)
    let [initialAdmins, setInitialAdmins] = useState(admins.admins.length)
    
    useEffect(()=>{
        setInitialAdmins(admins.admins.length)
    },[initialAdmins, admins])

    let view =  props.content ? props.content : "default"
    const forms = {
        "create": () => <CreateAdmin initial={initialAdmins} toggle={props.toggle} />,
        "update": () => <UpdateAdmin admin={props.admin} initial={initialAdmins} toggle={props.toggle} />,
        "default": () => null,
    }
    const selectedForm = forms[view]()
    
    let templete = null
    if(window.innerWidth > 576) {
        templete = (
            <Modal show={props.show}  onHide={props.toggle}>
                <div id="AdminModal">
                    <Modal.Body>
                        {selectedForm}
                    </Modal.Body>
                </div>
            </Modal>
        )
    } else {
        templete = <div>{selectedForm}</div>
    }

    return (<>{templete}</>)
}

export default ModalForm