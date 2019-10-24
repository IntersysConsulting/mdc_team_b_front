import React, { useState } from 'react';
import '../order-card/order-card.css';
import icon from '../order-card/icon.PNG';
import Status from '../../components/status-label/status';
import OrderInfoModal from '../../components/order-info-modal/order-info-modal';

const OrderCard = (props) => {

    const [orderModalShow, orderModalSetShow] = useState(false);
    const orderModalHandleShow = () => orderModalSetShow(!orderModalShow);

    return (
            <div id="order-card-whole" className="col-xs-12 col-md-7 col-lg-5">

                <OrderInfoModal 
                title={props.number} 
                status={props.status} 
                date={props.date}
                billedTo={props.billedTo}
                shippedTo={props.shippedTo}
                products={props.products}
                cost={props.cost.toString().slice(0,-2)+"."+props.cost.toString().slice(-2)} 
                show={orderModalShow} 
                handleShow={orderModalHandleShow}>
                </OrderInfoModal>

                <div>
                    <img id="order-card-icon" src={icon} alt="icon" />
                </div>

                <div id="order-card-number" className="row">
                    <button id="show-order-button" onClick={orderModalHandleShow}>Order No: {props.number}</button>
                    <div id="order-card-status">
                    <Status status={props.status} />
                    </div>
                </div>

                <div id="order-card-product">
                    {props.quantity}x {props.firstProduct}
            </div>

                <div id="order-card-cost">
                    USD ${props.cost.toString().slice(0,-2)+"."+props.cost.toString().slice(-2)}
                </div>
                
            </div>
    );
}

export default OrderCard;