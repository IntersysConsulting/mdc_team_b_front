import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import AcceptButton from "../../components/accept-button/accept-button";
import request from "axios";

import "./product.css";

const SingleProduct = props => {
  let [url] = useState(window.location.pathname.replace("/product/", ""));
  const [productDisplayed, setProductDisplayed] = useState({
    currentProduct: {}
  });
  const [isLoading, setIsLoading] = useState({ loading: true });

  const [isBtnLoading, setIsBtnLoading] = useState({ loading: false });
  const [result, setResult] = useState({ success: false, error: false });
  const [isOnCart, setIsOnCart] = useState({ value: false }); // Will listen to the store eventually

  const resetResult = () => {
    setResult({ success: false, error: false });
    setIsBtnLoading({ loading: false });
  };

  const handleButtonClick = () => {
    setIsBtnLoading({ loading: true });
    setTimeout(isOnCart.value ? requestRemoveProduct : requestAddProduct, 10);
  };

  const requestRemoveProduct = () => {
    let access_token = localStorage.getItem("access_token");

    if (access_token) {
      const header = { headers: { Authorization: "Bearer " + access_token } };
      const body = { ...header };
      body.data = { product_id: url };

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
      formData.set("product_id", url);
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

  useEffect(() => {
    request
      .get("http://localhost:5000/api/v1/products/?product_id=" + url)
      .then(response => {
        setIsLoading({
          loading: false
        });
        setProductDisplayed({
          currentProduct: response.data.data
        });
      });
  }, [url]);

  let component = null;
  isLoading.loading
    ? (component = (
        <div className="LoadingView">
          <Spinner className="Spinner" animation="border" variant="warning" />
        </div>
      ))
    : (component = (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="ImageSpaceBootstrap">
              <img src={productDisplayed.currentProduct.img} alt="Product" />
            </div>
            <div className="col-xs-12 col-md-5 col-lg-4 DetailSpaceBootstrap">
              <div className="row justify-content-center justify-content-md-start">
                <p className="NameText">
                  {" "}
                  {productDisplayed.currentProduct.name}{" "}
                </p>
              </div>
              <div className="row justify-content-center justify-content-md-start">
                <p className="PriceLabel"> Price: </p>
                <p className="PriceText">
                  {" "}
                  ${productDisplayed.currentProduct.price}{" "}
                </p>
                <p className="DescriptionText">
                  {" "}
                  {productDisplayed.currentProduct.description}{" "}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <AcceptButton
                cart
                variant={isOnCart.value ? "indigo" : "green"}
                className={
                  "add-to-cart-button " +
                  (result.error || result.success || isBtnLoading.loading
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
                  : isBtnLoading.loading && isOnCart.value
                  ? "We are getting rid of it!"
                  : isBtnLoading.loading && !isOnCart.value
                  ? "We're getting it for you!"
                  : isOnCart.value
                  ? "Remove from cart"
                  : "Add to Cart"}
              </AcceptButton>
            </div>
          </div>
        </div>
      ));

  return <div>{component}</div>;
};

export default SingleProduct;
