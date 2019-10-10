import React, { useState } from 'react'
import './privacy-and-terms-modal.css'
import { Modal } from 'react-bootstrap'
import Title from '../title/title'

const CheckoutAddressModal = (props) => {

    return (

    <div>

        <Modal id="privacy-and-terms-modal" className="" dialogClassName="custom-modal" show={props.show} onHide={props.handleShow}>
            
            <Modal.Header id="privacy-and-terms-modal-header" closeButton/>
                
                <Title id="privacy-and-terms-modal-title">{props.title}</Title>

            <Modal.Body id="privacy-and-terms-modal-content">
                {props.children}
            </Modal.Body>
            
        </Modal>

        </div>

    );
}
export default CheckoutAddressModal