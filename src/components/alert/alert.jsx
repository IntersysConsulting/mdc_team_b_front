import React from 'react'
import '../alert/alert.css'
import { Modal } from 'react-bootstrap'
import CancelButton from '../cancel-button/cancel-button'
import AcceptButton from '../accept-button/accept-button'

const Alert = (props) => {

    return (
        <>{
            props.error ?
            <Modal id="alert-modal" show={props.show} onHide={props.handleShow}>
                <Modal.Body id="modal-text-error" className="text-orange">{props.children}</Modal.Body>
                <div id="buttons-container">
                    <AcceptButton className="col-4" border onClick={props.confirmAction}>Ok</AcceptButton>
                </div>
            </Modal>
            :
            <Modal id="alert-modal" show={props.show} onHide={props.handleShow}>
                <Modal.Body id="modal-text">{props.children}</Modal.Body>
                <div id="buttons-container">
                    <CancelButton className="col-4" onClick={props.handleShow}>{props.no}</CancelButton>
                    <AcceptButton className="col-4" border onClick={props.confirmAction}>{props.yes}</AcceptButton>
                </div>
            </Modal>
        }
        </>
    );
}
export default Alert