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

            <Modal id="alert-modal" show={props.show} onHide={props.handleShow}>
                <Modal.Body id="modal-text">{props.children}</Modal.Body>
                <div id="buttons-container">
                    <CancelButton className="col-4" onClick={props.handleShow}>{props.no}</CancelButton>
                    <AcceptButton className="col-4" border onClick={handleRedirect}>{props.yes}</AcceptButton>
                </div>
            </Modal>
        </>
    );
}
export default Alert