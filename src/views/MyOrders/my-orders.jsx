import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../MyOrders/my-orders.css';
import OrderCard from '../../components/order-card/order-card';
import Title from '../../components/title/title';
import {Spinner} from 'react-bootstrap';
import { myOrdersActions } from '../../actions/myOrdersActions';

const MyOrders = (props) => {

    const orders = useSelector((state) => state.myOrdersState.orders);
    const loading = useSelector((state) => state.myOrdersState.loading);
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(false);
    const order_cards = [];

    useEffect(()=>{
        if (!firstLoad){
            dispatch(myOrdersActions());
        }
        setFirstLoad(true);
    },[firstLoad])

    useEffect(() =>  {
        if(loading){
        dispatch(myOrdersActions());}
    },[loading])

    for (let i=0; i<orders.length; i++){
        order_cards.push(
        <OrderCard
        number="XXXXXX"
        status={orders[i].status} 
        cost={orders[i].total} 
        />)
    }


    if (loading) {
        return (
            <Spinner className="Spinner" animation="border" variant="warning"/>
        )
    } else {
        return (

            <div className="offset-1">

                <div className="myorders-title col-12">
                    <Title>My Orders</Title>
                </div>
                <div id="order-cards-table" className="row col-12">
                    {order_cards}
                </div>
            </div>
        )
    }
}

export default MyOrders;