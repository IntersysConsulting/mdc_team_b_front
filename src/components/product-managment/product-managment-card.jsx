import React from "react";
import Price from "../price-text/price-text";
import EditButton from "../edit-button/edit-button";
import StorefrontImage from "../storefront-image/storefront-image";
import './product-managment-card.css';
import DeleteButton from "../delete-button/delete-button";

const CardProductManagment = (props) => (
    <div className="pruduct-managment-container">
        <DeleteButton className="btn-delete-product icon-22x22 btn-red"></DeleteButton>
        <div className="image-container">
            <StorefrontImage url={props.url}></StorefrontImage>
        </div>
        <div className="body-card-container">
            <div className="text-card-container">
                <p className="text-indigo product-name">{props.name}</p>
                <div className="name-price-card-container">
                    <p className="product-price">Price:</p>
                    <Price price={props.price}/>
                </div>
                </div>
            <div>
                <EditButton className="card-button-product" icon>Edit</EditButton>
            </div>
        </div>
    </div>
)

export default CardProductManagment