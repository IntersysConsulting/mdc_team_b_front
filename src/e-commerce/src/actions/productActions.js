import {productConstants} from '../constants/productConstants';
import {productApi} from '../api/productApi';

/**
 * Consts to get prodcuts from API implementing API request convention
 * @function fetchProductBegin
 * @function fetchProductSuccess
 * @function fetchProductError
 */

const fetchProductBegin = () => {
  return {
    type: productConstants.FETCH_PRODUCT_BEGIN,
  };
};

const fetchProductError = (error) => {
  return {
    type: productConstants.FETCH_PRODUCT_ERROR,
    payload: error.message,
  };
};

const fetchProductSuccess = (products) => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCES,
    payload: products,
  };
};

/**
 * Function to get products from API implementing API request convention
 */

export const prodcutActions = () => {
  return (dispatch) => {
    dispatch(fetchProductBegin());
    productApi.get_products().then((response) => {
      dispatch(fetchProductSuccess(response.data));
    }).catch((error) => {
      dispatch(fetchProductError(error));
    });
  };
};
