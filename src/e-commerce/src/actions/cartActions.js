import {cartConstants} from '../constants/cartConstants';
import {cartApi} from '../api/cartApi';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchCartBegin
 * @function fetchCartSuccess
 * @function fetchCartError
 */

const fetchCartBegin = () => {
  return {
    type: cartConstants.FETCH_CART_BEGIN,
  };
};

const fetchCartError = (error) => {
  return {
    type: cartConstants.FETCH_CART_ERROR,
    payload: error.message,
  };
};

const fetchCartSuccess = (items) => {
  return {
    type: cartConstants.FETCH_CART_SUCCES,
    payload: items,
  };
};

/**
 * Function to get products from API implementing API request convention
 */

export const CartActions = () => {
  return (dispatch) => {
    dispatch(fetchCartBegin());
    cartApi.get_items().then((response) => {
      dispatch(fetchCartSuccess(response.data));
    }).catch((error) => {
      dispatch(fetchCartError(error));
    });
  };
};
