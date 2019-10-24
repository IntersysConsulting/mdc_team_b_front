import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../MyOrders/my-orders.css';
import OrderCard from '../../components/order-card/order-card';
import Title from '../../components/title/title';
import { Spinner } from 'react-bootstrap';
import { myOrdersActions } from '../../actions/myOrdersActions';

const MyOrders = (props) => {

    const orders = useSelector((state) => state.myOrdersState.orders);
    const loading = useSelector((state) => state.myOrdersState.loading);
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(false);
    const order_cards = [];

    useEffect(() => {
        if (!firstLoad) {
            dispatch(myOrdersActions());
        }
        setFirstLoad(true);
    }, [firstLoad, dispatch])

    useEffect(() => {
        if (loading) {
            dispatch(myOrdersActions());
        }
    }, [loading, dispatch])
    

    for (let i = 0; i < orders.length; i++) {

        let products = [];

        if (orders[i].status !== "Pending") {

            for (let n = 0; n < orders[i].products.length; n++) {
                products.push(
                    orders[i].products[n].quantity + "x " + orders[i].products[n].name 
                    + " $" +orders[i].products[n].unitary_price.toString().slice(0,-2)
                    + "." +orders[i].products[n].unitary_price.toString().slice(-2)
                )
            }

            order_cards.push(
                <OrderCard
                    key={i}
                    number = {orders[i].order_no}
                    status={{ status: orders[i].status }}
                    date={orders[i].date}
                    billedTo={
                        orders[i].billing_address.first_name + " " + orders[i].billing_address.last_name + ". " +
                        orders[i].billing_address.address + ". " + orders[i].billing_address.city + " (" +
                        orders[i].billing_address.state + "), " + orders[i].billing_address.country + ". " +
                        orders[i].billing_address.zip_code
                    }
                    shippedTo={
                        orders[i].shipping_address.first_name + " " + orders[i].shipping_address.last_name + ". " +
                        orders[i].shipping_address.address + ". " + orders[i].shipping_address.city + " (" +
                        orders[i].shipping_address.state + "), " + orders[i].shipping_address.country + ". " +
                        orders[i].shipping_address.zip_code
                    }
                    cost={orders[i].total}
                    quantity={orders[i].products[0].quantity}
                    firstProduct={orders[i].products[0].name}
                    products={products}
                />)

        }
    }


    if (loading) {
        return (
            <div id="myorders-spinner">
                <Spinner className="Spinner" animation="border" variant="warning" />
            </div>
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