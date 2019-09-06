import {cartConstans} from '../constants/cartConstants';
import { cartAPI } from '../api/cartAPI';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchCartBegin
 * @function fetcCarthSuccess
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

const fetchCartSuccess = (products) => {
    return {
        type: cartConstans.FETCH_CART_SUCCES,
        products
    }
}

/**
 * Function to get products from API implementing API request convention
 */

export const getPosts = () => {
    return (dispatch) => {
        dispatch(fetchCartBegin())
        cartAPI.getProducts().then(response => {
            dispatch(fetchCartSuccess(response.data))
        }).catch((error) => {
            dispatch(fetchCartError(error))
        })
    }
}