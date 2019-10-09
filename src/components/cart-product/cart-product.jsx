import React from "react";
import Price from "../price-text/price-text";
import Quantity from '../quantity/quantity';
import StorefrontImage from "../storefront-image/storefront-image";
import {Link} from  'react-router-dom';
import './cart-product.css';

const CartProduct = (props) => {

    const deleteHandler = () => {
        props.deleteFn(props.id);
    }

    return(
    <div className="cart-product-container">
        <div className="cart-product-image-container">
            <Link to={props.productPage} className="cart-product-image-link">
                <StorefrontImage url={props.url}/>
            </Link>            
        </div>
        <div className="cart-product-body-item-container">
            <div className="cart-product-info-container">
                <Link to={props.productPage}>
                    <p className="text-indigo cart-product-name">
                        {props.name}
                    </p>
                </Link>
                <Price price={props.price}/>
            </div>
            <div className="cart-product-update-options-container">
                <div className="cart-product-quantity-text-container">
                    <p>Quantity: </p>
                    <Quantity 
                        className="cart-product-quantity-container" 
                        quantity={props.quantity} 
                        id={props.id}
                        onChange={props.onChange}/>
                </div>                
                <p className="cart-product-delete-text"  onClick={deleteHandler}>Delete</p>
            </div>                
        </div>
    </div>
    );
};

export default CartProduct