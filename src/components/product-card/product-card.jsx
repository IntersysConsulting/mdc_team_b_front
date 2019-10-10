import React, { useState } from "react";
import Price from "../price-text/price-text";
import StorefrontImage from "../storefront-image/storefront-image";
import AcceptButton from "../accept-button/accept-button";
import { Link } from "react-router-dom";
import request from "axios";

import "./product-card.css";

const CardProduct = props => {
  const [isLoading, setIsLoading] = useState({ loading: false });
  const [result, setResult] = useState({ success: false, error: false });
  const [isOnCart, setIsOnCart] = useState({ value: false }); // Will listen to the store eventually

  const resetResult = () => {
    setResult({ success: false, error: false });
    setIsLoading({ loading: false });
  };

  const handleButtonClick = () => {
    console.log("Is loading == true");
    setIsLoading({ loading: true });
    setTimeout(isOnCart.value ? requestRemoveProduct : requestAddProduct, 10);
  };

  const requestRemoveProduct = () => {
    let access_token = localStorage.getItem("access_token");

    if (access_token) {
      const header = { headers: { Authorization: "Bearer " + access_token } };
      const body = { ...header };
      body.data = { product_id: props.product_id };

      request
        .delete("http://localhost:5000/api/v1/carts/", body)
        .then(response => {
          if (response.status === 200) {
            removeProductResult(true);
          } else {
            removeProductResult(false);
          }
        })
        .catch(error => {
          removeProductResult(false);
        });
    } else {
      removeProductResult(false);
    }
  };

  const addProductResult = result => {
    setResult({ success: result, error: !result });
    setIsOnCart({ value: result });
    setTimeout(resetResult, 4000);
  };

  const removeProductResult = result => {
    setResult({ success: result, error: !result });
    setIsOnCart({ value: !result });
    setTimeout(resetResult, 4000);
  };

  const requestAddProduct = () => {
    let access_token = localStorage.getItem("access_token");

    if (access_token) {
      let formData = new FormData();
      formData.set("product_id", props.product_id);
      formData.set("quantity", 1);
      request
        .put("http://localhost:5000/api/v1/carts/", formData, {
          headers: { Authorization: "Bearer " + access_token }
        })
        .then(response => {
          if (response.status === 200) {
            addProductResult(true);
          } else {
            addProductResult(false);
          }
        })
        .catch(error => {
          addProductResult(false);
        });
    } else {
      addProductResult(false);
    }
  };

  return (
    <div className="pruduct-managment-container">
      <div className="image-container">
        <Link to={props.productPage}>
          <StorefrontImage url={props.url}></StorefrontImage>{" "}
        </Link>
      </div>
      <div className="body-card-container">
        <div className="text-card-container">
          <Link to={props.productPage}>
            <p className="text-indigo product-name">{props.name}</p>
          </Link>
          <div className="name-price-card-container">
            <p className="product-price">Price:</p>
            <Price price={props.price} />
          </div>
          <AcceptButton
            cart
            variant={isOnCart.value ? "indigo" : "green"}
            className={
              "add-to-cart-button " +
              (result.error || result.success || isLoading.loading
                ? "loading-button "
                : "") +
              (result.error
                ? "orange-transition "
                : result.success && isOnCart.value
                ? "blue-transition "
                : result.success && !isOnCart.value
                ? "green-transition "
                : "")
            }
            onClick={handleButtonClick}
          >
            {result.error
              ? "    There was an error!  "
              : result.success && !isOnCart.value
              ? "      Off with it!       "
              : result.success && isOnCart.value
              ? "       It's yours!       "
              : isLoading.loading && isOnCart.value
              ? "We are getting rid of it!"
              : isLoading.loading && !isOnCart.value
              ? "We're getting it for you!"
              : isOnCart.value
              ? "Remove from cart"
              : "Add to Cart"}
          </AcceptButton>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
