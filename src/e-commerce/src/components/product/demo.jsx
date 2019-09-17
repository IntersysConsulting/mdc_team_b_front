import React from "react";
import cardProduct from "./card.jsx";

const productContainerDemo = props => {
    return (
        <div className="container">
            <h1>Product Card Demo</h1>
            <div className="row justify-content-md-center mx-auto">
                <div className="col-md-6 col-sm-12  pd-auto">
                    <cardProduct
                        preferred
                        name="John Smith"
                        address="Rockford Mountain Lane 2179"
                        country="us"
                        state="nc"
                        zipCode="27514"
                    ></cardProduct>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <cardProduct
                        name="Roy K Windburn"
                        address="Andy Street 3958"
                        country="us"
                        state="sd"
                        zipCode="57102"
                    ></cardProduct>
                </div>
            </div>
        </div>
    );
};

export default productContainerDemo;
