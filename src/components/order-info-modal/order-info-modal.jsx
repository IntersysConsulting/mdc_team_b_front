import React from 'react'
import './order-info-modal.css'
import { Modal } from 'react-bootstrap'
import Status from '../../components/status-label/status';

const OrderInfoModal = (props) => {

    return (

    <div className="col-10">

        <Modal id="order-info-modal" dialogClassName="custom-modal center" show={props.show} onHide={props.handleShow} data-backdrop="">
            
            <Modal.Header id="order-info-modal-header" closeButton/>
                
                <p id="order-info-modal-title">Order No: {props.title}</p>
                <div id="order-info-modal-status">
                <Status status={props.status}/>
                </div>

            <Modal.Body id="order-info-modal-content" className="offset-1 col-10">
                <b>Date:</b>
                <br></br>
                {props.date}
                <br></br>
                <br></br>
                <b>Billed To:</b>
                <br></br>
                {props.billedTo}
                <br></br>
                <br></br>
                <b>Shipped To:</b>
                <br></br>
                {props.shippedTo}
                <br></br>
                <br></br>
                <b>Products:</b>
                <br></br>
                {props.products.map((product, key) => (
                <span id="order-info-modal-products" key={key}>- {product}</span>)
                )}
                <br></br>
                <b>Total: </b>{props.cost}
            </Modal.Body>
            
        </Modal>

        </div>

    );
}
export default OrderInfoModal