import React, { useState, useEffect } from "react";
import axios from "axios";
import CartProduct from "../../components/cart-product/cart-product";
import AcceptButton from "../../components/accept-button/accept-button";
import Price from "../../components/price-text/price-text";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

import "./cart-view.css";

const CartView = props => {
  const [cartProducts, setCartProducts] = useState({
    products: []
  });
  const [isLoading, setIsLoading] = useState({
    loading: true,
    updating: false
  });
  const [urls] = useState({
    cart: process.env.REACT_APP_API_URL + "/carts/",
    orders: process.env.REACT_APP_API_URL + "/orders/"
  });
  const token = "Bearer " + localStorage.getItem("access_token");
  const [defaultHeaders] = useState({
    headers: {
      Authorization: token
    }
  });

  useEffect(() => {
    setIsLoading({
      loading: true
    });
    axios
      .get(urls.cart, defaultHeaders)
      .then(response => {
        setIsLoading({
          loading: false
        });
        if (Object.keys(response.data.data.cart).length !== 0) {
          setCartProducts({
            products: response.data.data.cart.products
          });
        }
      })
      .catch(error => {
        setIsLoading({
          loading: false
        });
      });
  }, [defaultHeaders, urls]);

  const updateCart = (id, quantity) => {
    setIsLoading({
      updating: true
    });
    const newCartProducts = cartProducts.products.slice();
    newCartProducts.map(x => (x._id === id ? (x.quantity = quantity) : x));
    axios
      .put(
        urls.cart,
        {
          product_id: id,
          quantity: quantity
        },
        defaultHeaders
      )
      .then(response => {
        setCartProducts({
          products: newCartProducts
        });
        setIsLoading({
          updating: false
        });
      })
      .catch(error => {
        setIsLoading({
          updating: false
        });
      });
  };

  const deleteItem = id => {
    setIsLoading({
      updating: true
    });
    const body = { ...defaultHeaders };
    body.data = {
      product_id: id
    };
    axios
      .delete(urls.cart, body)
      .then(response => {
        const newCartProducts = cartProducts.products
          .slice()
          .filter(x => x._id !== id);
        setCartProducts({
          products: newCartProducts
        });
        setIsLoading({
          updating: false
        });
      })
      .catch(error => {
        setIsLoading({
          updating: false
        });
      });
  };

  const createOrder = () => {
    setIsLoading({
      updating: true
    });

    axios
      .post(urls.orders, {}, defaultHeaders)
      .then(response => {
        setIsLoading({
          updating: false
        });
        props.history.push("/checkout");
      })
      .catch(error => {
        setIsLoading({
          updating: false
        });
      });
  };

  let subtotal = 0;

  const renderItem = i => {
    return (
      <CartProduct
        key={i._id}
        price={i.price}
        quantity={i.quantity}
        url={i.image}
        name={i.name}
        id={i._id}
        onChange={updateCart}
        deleteFn={deleteItem}
        productPage={"/product/" + i._id}
      />
    );
  };

  let updatingSpinner;
  if (isLoading.updating) {
    updatingSpinner = (
      <div className="cart-view-checkout-button">
        <Spinner
          className="cart-view-spinner"
          animation="border"
          variant="warning"
        />
      </div>
    );
  } else {
    updatingSpinner = (
      <div className="cart-view-checkout-button">
        <AcceptButton border block onClick={createOrder}>
          Proceed to checkout
        </AcceptButton>
      </div>
    );
  }

  //Rendering
  let component = null;
  if (isLoading.loading) {
    component = (
      <div className="ProductsDisplay">
        <Spinner className="Spinner" animation="border" variant="warning" />
      </div>
    );
  } else {
    if (cartProducts.products.length > 0) {
      const allItems = cartProducts.products.map(e => {
        subtotal += e.price * e.quantity;
        return renderItem(e);
      });
      component = (
        <div className="container cart-view">
          <div className="cart-view-items-container">
            <div className="cart-view-top-text">
              <div className="cart-view-title">
                <h3>My cart</h3>
              </div>
              <p>
                You have <span>{cartProducts.products.length}</span> products in
                your cart.
              </p>
            </div>
            {allItems}
          </div>
          <div className="cart-view-checkout">
            <div className="cart-view-subtotal">
              <p className="cart-view-subtotal-text">SUBTOTAL: </p>
              <Price
                className="cart-view-subtotal-price"
                currency={"MXN"}
                price={subtotal}
              />
            </div>
            {updatingSpinner}
          </div>
        </div>
      );
    } else {
      component = (
        <div className="container cart-view-empty">
          <div className="cart-view-empty-text">
            <h3>Your cart is empty!</h3>
            <p>
              Why not <Link to="/">start shopping now</Link>?
            </p>
          </div>
        </div>
      );
    }
  }

  return <div>{component}</div>;
};

export default CartView;
