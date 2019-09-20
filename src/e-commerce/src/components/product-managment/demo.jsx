import React from "react";
import CardProductManagment from "./product-managment-card.jsx";
import digital from '../../assets/images/digital.jpg';
import not from '../../assets/images/not.jpg';
import physical from '../../assets/images/physical.jpg';
import bears from '../../assets/images/bears.jpg';

const ProductManagmentDemo = props => {
    return (
        <div className="container">
            <h1>Product Managment Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <CardProductManagment price={3} url={digital} name={"Gears of War 5"}></CardProductManagment>
                <CardProductManagment price={20000} url={not} name={"Movie"}></CardProductManagment>
                <CardProductManagment price={150000} url={physical} name={"Rubik Cube"}></CardProductManagment>
                <CardProductManagment price={150000} url={bears} name={"Bear"}></CardProductManagment>
            </div>
        </div>
    );
};

export default ProductManagmentDemo;
