import React from "react";
import CardProduct from "./card.jsx";

const ProductDemo = props => {
    return (
        <div className="container">
            <h1>Product Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <div className="col-md-6 col-sm-12  pd-auto">
                    <CardProduct></CardProduct>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <CardProduct></CardProduct>
                </div>
            </div>
        </div>
    );
};

export default ProductDemo;
