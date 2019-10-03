import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './product.css'

const SingleProduct = (props) => {
    let [url] = useState( (window.location.pathname).replace("/product/", "") );
    const [productDisplayed, setProductDisplayed] = useState({ currentProduct: {} })
    const [isLoading, setIsLoading] = useState({ loading: true})

    useEffect( () => {
        axios.get('http://localhost:5000/api/v1/products/?product_id='+ url)
        .then(response => {
            setIsLoading({
                loading: false
            })
            setProductDisplayed({
                currentProduct: response.data.data
            })
        })
    }, []);

    let component = null;
    (isLoading.loading) 
    ? component = (
        <div className="LoadingView">
            <Spinner className="Spinner" animation="border" variant="warning" />
        </div>
    )
    : component = (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="ImageSpaceBootstrap">
                    <img src= {productDisplayed.currentProduct.img} alt= "Product"/>
                </div>
                <div className="col-xs-12 col-md-5 col-lg-4 DetailSpaceBootstrap">
                    <div className="row justify-content-center justify-content-md-start">
                        <p className="NameText"> {productDisplayed.currentProduct.name} </p>
                    </div>
                    <div className="row justify-content-center justify-content-md-start">
                        <p className="PriceLabel"> Price: </p> 
                        <p className="PriceText"> ${productDisplayed.currentProduct.price} </p>
                        <p className="DescriptionText"> {productDisplayed.currentProduct.description} </p>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <Button className="ButtonBootstrap">Add to Cart</Button>
                </div>
            </div>
        </div>
    )

    return(
        <div>
            {component}
        </div>
        
    );
}
  
  export default SingleProduct;