import React from "react";
import cardProduct from "./card.jsx";

const productContainerDemo = props => {
    return (
        <div className="container">
            <h1>Product Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <div className="col-md-6 col-sm-12  pd-auto">
                    <cardProduct                     
                    ></cardProduct>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <cardProduct                        
                    ></cardProduct>
                </div>
            </div>
        </div>
    );
};

export default productContainerDemo;
