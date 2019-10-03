import React from 'react';
import CartProduct from '../../components/cart-product/cart-product';
import AcceptButton from '../../components/accept-button/accept-button';
import Price from "../../components/price-text/price-text";

import './cart-view.css';

import digital from '../../assets/images/digital.jpg';
import not from '../../assets/images/not.jpg';
import physical from '../../assets/images/physical.jpg';
import bears from '../../assets/images/bears.jpg';

const hardcodedData = [
    {
        price:500,
        url: digital,
        name:"Gears of war 4"
    },
    {
        price:150000,
        url: not,
        name:"Chica gato del area 52"
    },
    {
        price:70,
        url: physical,
        name:"Foto de un rubik"
    },
    {
        price:666,
        url: bears,
        name:"Oso maduro"
    },
]

const CartView = (props) => {
    const change = () =>{
        alert("You changed the quantity");
      }
    const AlertAccept = () => {
        alert("You clicked on an accept button!");
    };

    let subtotal = 0;


    const renderItem = (i) =>{
        const item = hardcodedData[i];
        return (
            <CartProduct price={item.price} url={item.url} name={item.name}></CartProduct>
        );
    }
    const allItems = hardcodedData.map((e,i) => {
        subtotal += e.price;
        return renderItem(i);
    });
    if(hardcodedData.length>0)
        return(
        <div className="container cart-view">
            <div className="cart-view-items-container">
                <div className="cart-view-top-text">
                    <h3>My cart</h3>
                    <p>You have <span>{hardcodedData.length}</span> products in your cart.</p>
                </div>
                {allItems}
            </div>
            <div className="cart-view-checkout">
                <div className="cart-view-subtotal">
                    <p className="cart-view-subtotal-text">SUBTOTAL: </p>
                    <Price currency={'MXN'} price={subtotal}/>
                </div>
                <div className="cart-view-checkout-button">
                    <AcceptButton
                    border
                    block
                    onClick={props.alerts ? AlertAccept : undefined}>
                        Proceed to checkout
                    </AcceptButton>
                </div>
            </div>
        </div>
        );
    else
        return(
            <div className="container cart-view-empty">
                <div className="cart-view-empty-text">
                    <h3>Your cart is empty!</h3>
                    <p>Why not <a href="#/">start shopping now</a>?</p>
                </div>
        </div>
        );
};

export default CartView