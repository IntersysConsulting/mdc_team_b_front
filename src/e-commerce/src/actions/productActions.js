import {productConstants} from '../constants/productConstants';
import { cartAPI } from '../api/cartAPI';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchProductBegin
 * @function fetchProductSuccess
 * @function fetchProductError
 */

const fetchProductBegin = () => {
    return {
        type: productConstants.FETCH_PRODUCT_BEGIN
    }
}

const fetchProductError = (error) => {
    return {
        type: productConstants.FETCH_PRODUCT_ERROR,
        errorMessage: error.message
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: productConstants.FETCH_PRODUCT_SUCCES,
        products
    }
}

/**
 * Function to get products from API implementing API request convention
 */

export const getProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductBegin())
        cartAPI.getProducts().then(response => {
            dispatch(fetchProductSuccess(response.data))
        }).catch((error) => {
            dispatch(fetchProductError(error))
        })
    }
}