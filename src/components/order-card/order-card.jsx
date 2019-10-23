import React, { useState } from 'react';
import '../order-card/order-card.css';
import icon from '../order-card/icon.PNG';
import Status from '../../components/status-label/status';
import OrderInfoModal from '../../components/order-info-modal/order-info-modal';

const OrderCard = (props) => {

    const [orderModalShow, orderModalSetShow] = useState(false);
    const orderModalHandleShow = () => orderModalSetShow(!orderModalShow);

    return (
            <div id="order-card-whole" className="col-xs-12 col-sm-8 col-md-6 col-lg-4">

                <OrderInfoModal 
                title={props.number} 
                status={props.status} 
                date={props.date}
                billedTo={props.billedTo}
                shippedTo={props.shippedTo}
                products={props.products}
                cost={props.cost} 
                show={orderModalShow} 
                handleShow={orderModalHandleShow}>
                </OrderInfoModal>

                <div>
                    <img id="order-card-icon" src={icon} alt="icon" />
                </div>
                <div id="order-card-number">
                    <a onClick={orderModalHandleShow} href>Order No: {props.number}</a>
                </div>
                <div id="order-card-status">
                    <Status status={props.status} />
                </div>
                <div id="order-card-product">
                    {props.quantity}x {props.firstProduct}
            </div>
                <div id="order-card-cost">
                    USD ${props.cost}
                </div>
            </div>
    );
}

export default OrderCard;