import React from 'react';
import '../MyOrders/my-orders.css';
import OrderCard from '../../components/order-card/order-card';
import Title from '../../components/title/title';

const MyOrders = (props) =>{
    return (

        <div>

            <div className="myorders-title col-8 offset-2">
            <Title>My Orders</Title>
            </div>

            <div className="col-8 offset-2">
                <div id="order-cards-table" className="row">
                    <div id="order-cards-table-left-side" className="col-xs-10 col-lg-5">
                        <OrderCard number="111111" status="Shipped" cost="10.00"></OrderCard>
                        <OrderCard number="222222" status="Completed" cost="23.00"></OrderCard>
                        <OrderCard number="333333" status="Declined" cost="596.00"></OrderCard>
                    </div>
                    <div className="col-xs-2 col-md-2 col-lg-2"></div>
                    <div id="order-cards-table-right-side" className="col-xs-10 col-lg-5">
                        <OrderCard number="444444" cost="320.00"></OrderCard>
                        <OrderCard number="555555" cost="490.00"></OrderCard>
                        <OrderCard number="666666" cost="1092.00"></OrderCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders;