// Example of how to implement this component: 
// import Alert from '../components/alert/alert';
// <Alert mainButtonTitle="Log out" no="Cancel" yes="Yes" children="Are you sure you want to log out?" url="/app"/>

import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import '../alert/alert.css'
import { Modal, Button } from 'react-bootstrap'
import CancelButton from '../cancel-button/cancel-button'
import AcceptButton from '../accept-button/accept-button'

const Alert = (props) => {
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRedirect = () => setRedirect(true);

    return (
        <>
        {redirect ? <Redirect to={props.url} /> : null}
            {<Button variant="primary" onClick={handleShow}>
                {props.mainButtonTitle}
            </Button>}

            <Modal id="alert-modal" show={show} onHide={handleClose}>
                <Modal.Body id="modal-text">{props.children}</Modal.Body>
                <div id="buttons-container">
                    <CancelButton onClick={handleClose}>{props.no}</CancelButton>
                    <AcceptButton border onClick={handleRedirect}>{props.yes}</AcceptButton>
                </div>
            </Modal>
        </>
    );
}

export default Alert