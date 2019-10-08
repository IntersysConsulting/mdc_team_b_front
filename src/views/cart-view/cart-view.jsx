import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CartProduct from '../../components/cart-product/cart-product';
import AcceptButton from '../../components/accept-button/accept-button';
import Price from "../../components/price-text/price-text";
import Spinner from 'react-bootstrap/Spinner'
import {Link} from  'react-router-dom';

import './cart-view.css';

let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzA1NDYzOTEsIm5iZiI6MTU3MDU0NjM5MSwianRpIjoiYjEyZjc2NjItNjBjYS00NTYzLTg1MjAtYTYxNjdmMzViODg3IiwiZXhwIjoxNTcwNjMyNzkxLCJpZGVudGl0eSI6IjVkOWNhMmQ2NWE1MjVkMmYxZDAzNDM4NCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.v6Ok2Bdixn16Os6PclddOnpN4KW0tv_sYWooP7P_enQ";

const CartView = (props) => {
    const [cartProducts, setCartProducts] = useState({
        products: []
     });
     const [isLoading, setIsLoading] = useState({ loading: true})
     const url = 'http://localhost:5000/api/v1/carts/';
     const defaultHeaders = {
        headers: {
            Authorization : token
        }
    }

     useEffect(() => {
        setIsLoading({
            loading: true
        })
        axios.get(url, defaultHeaders)
        .then(response => {
            setIsLoading({
                loading: false
            });
            setCartProducts({
                products : response.data.data.cart.products
            });
            console.log(response);
        }).catch(error => {
            setIsLoading({
                loading: false
            })
        })
    }, []);
    //PUT request
    const updateCart = (id,quantity) =>{
        setIsLoading({
            loading: true
        });
        const newCartProducts = cartProducts.products.slice()
        newCartProducts.map(x => x._id === id ? x.quantity = quantity : x)
        
        axios.put(url, {
            product_id: id,
            quantity: quantity
        }, defaultHeaders)
        .then(response => {
            setCartProducts({
                products: newCartProducts
            })
            setIsLoading({
                loading: false
            });
            console.log(response);
        })
        .catch(error=>{
            setIsLoading({
                loading: false
            })
        })
    }

    //DELETE request
    const deleteItem = (id) =>{
        setIsLoading({
            loading: true
        });
        const body = {...defaultHeaders};
        body.data = {
            product_id:id
        }
        console.log(defaultHeaders)
        axios.delete(url, body)
        .then(response => {
            console.log(response)
            const newCartProducts = cartProducts.products.slice().filter(x => x._id !== id)
            setCartProducts({
                products: newCartProducts
            })
            setIsLoading({
                loading: false
            });            
        }).catch(error => {
            console.log(error)
            setIsLoading({
                loading: false
            }); 
        })
    }


    const AlertAccept = () => {
        alert("You clicked on an accept button!");
    };

    let subtotal = 0;


    const renderItem = (i) =>{
        return (
            <CartProduct 
                price={i.price} 
                quantity={i.quantity}
                url={i.image}
                name={i.name} 
                _id ={i._id}
                onChange={updateCart}
                deleteFn={deleteItem}
                productPage={"/product/" + i._id}/>
        );
    }

    //Rendering
    let component = null;
    if(isLoading.loading) {
        component = (
            <div className="ProductsDisplay">
                    <Spinner className="Spinner" animation="border" variant="warning" />
            </div>
        )
    } else {
        if(cartProducts.products.length>0) {
            const allItems = cartProducts.products.map((e) => {
                subtotal += e.price;
                return renderItem(e);
            });
            component = (
                <div className="container cart-view">
                    <div className="cart-view-items-container">
                        <div className="cart-view-top-text">
                            <h3>My cart</h3>
                            <p>You have <span>{cartProducts.products.length}</span> products in your cart.</p>
                        </div>
                        {allItems}
                    </div>
                    <div className="cart-view-checkout">
                        <div className="cart-view-subtotal">
                            <p className="cart-view-subtotal-text">SUBTOTAL: </p>
                            <Price currency={'MXN'} price={subtotal}/>
                        </div>
                        <div className="cart-view-checkout-button">
                            <AcceptButton
                            border
                            block
                            onClick={props.alerts ? AlertAccept : undefined}>
                                Proceed to checkout
                            </AcceptButton>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            component = (
                <div className="container cart-view-empty">
                    <div className="cart-view-empty-text">
                        <h3>Your cart is empty!</h3>
                        <p>Why not <Link to="/">start shopping now</Link>?</p>
                    </div>
                </div>
            );
        }        
    }
    

    return (
        <div>
            {component}
        </div>
    )
};

export default CartView