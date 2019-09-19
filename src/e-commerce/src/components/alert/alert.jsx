// Example of how to implement this component: 
// import Alert from '../components/alert/alert';
// <Alert mainButtonTitle="Log out" no="Cancel" yes="Yes" children="Are you sure you want to log out?" url="/app"/>

import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import '../alert/alert.css'
import { Modal } from 'react-bootstrap'
import CancelButton from '../cancel-button/cancel-button'
import AcceptButton from '../accept-button/accept-button'

const Alert = (props) => {
    const [redirect, setRedirect] = useState(false);
    const handleRedirect = () => setRedirect(true);

    return (
        <>
        {redirect ? <Redirect to={props.url} /> : null}

            <Modal id="alert-modal" show={props.show} onHide={props.handleClose}>
                <Modal.Body id="modal-text">{props.text}</Modal.Body>
                <div id="buttons-container">
                    <CancelButton onClick={props.handleClose}>{props.no}</CancelButton>
                    <AcceptButton border onClick={handleRedirect}>{props.yes}</AcceptButton>
                </div>
            </Modal>
        </>
    );
}

export default Alert