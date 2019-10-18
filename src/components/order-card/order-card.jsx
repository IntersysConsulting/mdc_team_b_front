import React, {useState} from 'react';
import '../order-card/order-card.css';
import icon from '../order-card/icon.PNG';
import Status from '../../components/status-label/status';
import OrderInfoModal from '../../components/order-info-modal/order-info-modal';

const OrderCard = (props) => {

    const [orderModalShow, orderModalSetShow] = useState(false);
    const orderModalHandleShow = () => orderModalSetShow(!orderModalShow);

    const [statusState] = useState({
        allStatus: [
        {status: 'Awaiting Payment'},
        {status: 'Awaiting Fullfillment'},
        {status: 'Awaiting Shipment'},
        {status: 'Shipped'},
        {status: 'Partially Shipped'},
        {status: 'Refunded'},
        {status: 'Partially Refunded'}, {status: 'Cancelled'},
        {status: 'Declined'},
        {status: 'Awaiting Pickup'},
        {status: 'Completed'},
        {status: 'Attention Required'},
        ],
    });

    return (
        <div id="order-card-whole">
        <OrderInfoModal title="Order no: 111111" status={statusState.allStatus[0]} show={orderModalShow} handleShow={orderModalHandleShow}>
            PIZZA
        </OrderInfoModal>
            <div>
                <img id="order-card-icon" src={icon} alt="icon" />
            </div>
            <div id="order-card-number">
                <a onClick={orderModalHandleShow} href>Order No: {props.number}</a>
            </div>
            <div id="order-card-status">
                <Status status={statusState.allStatus[0]}/>
            </div>
            <div id="order-card-product">
                2x Awesome Product
            </div>
            <div id="order-card-cost">
                USD ${props.cost}
            </div>
        </div>
    );
}

export default OrderCard;