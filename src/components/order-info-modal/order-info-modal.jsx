import React from 'react'
import './order-info-modal.css'
import { Modal } from 'react-bootstrap'
import Status from '../../components/status-label/status';

const OrderInfoModal = (props) => {

    return (

    <div>

        <Modal id="order-info-modal" dialogClassName="custom-modal" show={props.show} onHide={props.handleShow}>
            
            <Modal.Header id="order-info-modal-header" closeButton/>
                
                <p id="order-info-modal-title">Order No: {props.title}</p>
                <div id="order-info-modal-status">
                <Status status={props.status}/>
                </div>

            <Modal.Body id="order-info-modal-content">
                {props.children}
            </Modal.Body>
            
        </Modal>

        </div>

    );
}
export default OrderInfoModal