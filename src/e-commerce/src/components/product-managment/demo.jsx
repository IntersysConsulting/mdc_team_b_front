import React from "react";
import CardProduct from "./card.jsx";
import digital from '../../assets/images/digital.jpg';
import not from '../../assets/images/not.jpg';
import physical from '../../assets/images/physical.jpg';
import bears from '../../assets/images/bears.jpg';

const ProductManagmentDemo = props => {
    return (
        <div className="container">
            <h1>Product Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <CardProduct price={3} url={digital} name={"Gears of War 5"}></CardProduct>
                <CardProduct price={20000} url={not} name={"Movie"}></CardProduct>
                <CardProduct price={150000} url={physical} name={"Rubik Cube"}></CardProduct>
                <CardProduct price={150000} url={bears} name={"Bear"}></CardProduct>
            </div>
        </div>
    );
};

export default ProductManagmentDemo;
