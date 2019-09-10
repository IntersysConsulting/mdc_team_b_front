import {cartConstans} from '../constants/cart-constants';
import { cartAPI } from '../api/cart-api';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchCartBegin
 * @function fetchCartSuccess
 * @function fetchCartError
 */

const fetchCartBegin = () => {
    return {
        type: cartConstans.FETCH_CART_BEGIN
    }
}

const fetchCartError = (error) => {
    return {
        type: cartConstans.FETCH_CART_ERROR,
        errorMessage: error.message
    }
}

export const fetchCartSuccess = (products) => {
    return {
        type: cartConstans.FETCH_CART_SUCCES,
        products
    }
}

/**
 * Function to get products from API implementing API request convention
 */

export const getCart = () => {
    return (dispatch) => {
        dispatch(fetchCartBegin())
        cartAPI.getProducts().then(response => {
            dispatch(fetchCartSuccess(response.data))
        }).catch((error) => {
            dispatch(fetchCartError(error))
        })
    }
}