import React from "react";
import CartProduct from "./cart-product.jsx";
import digital from '../../assets/images/digital.jpg';

const CartProductDemo = props => {
    return (
        <div className="container">
            <h1>Product Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <CartProduct price={3} url={digital} name={"Gears of War 5"}></CartProduct>
            </div>
        </div>
    );
};

export default CartProductDemo;