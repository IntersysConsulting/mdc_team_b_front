import { checkoutConstants } from '../constants/checkoutConstants';
import { checkoutApi } from '../api/checkoutApi';
/**
 * Consts to get posts from API implementing API request convention
 * @function fetchOrderBegin
 * @function fetchOrderSuccess
 * @function fetchOrderError
 * @function fetchCustomerBegin
 * @function fetchCustomerSuccess
 * @function fetchCustomerError
 */

//---------------------- Order --------------------------------------------------
const fetchOrderBegin = () => {
    return {
        type: checkoutConstants.FETCH_ORDER_BEGIN,
    };
};

const fetchOrderSuccess = (order) => {
    return {
        type: checkoutConstants.FETCH_ORDER_SUCCESS,
        payload: order,
    };
};

const fetchOrderError = (error) => {
    return {
        type: checkoutConstants.FETCH_ORDER_ERROR,
        payload: error.message,
    };
};

//---------------------- Customer --------------------------------------------------
const fetchCustomerBegin = () => {
    return {
        type: checkoutConstants.FETCH_CUSTOMER_BEGIN,
    };
};

const fetchCustomerSuccess = (data) => {
    return {
        type: checkoutConstants.FETCH_CUSTOMER_SUCCESS,
        payload: data,
    };
};

const fetchCustomerError = (error) => {
    return {
        type: checkoutConstants.FETCH_CUSTOMER_ERROR,
        payload: error.message,
    };
};


export const checkoutOrderActions = () => {
    return (dispatch) => {
        dispatch(fetchOrderBegin());
        checkoutApi.getOrderInfo().then((response) => {
            dispatch(fetchOrderSuccess(response.data.data[0]));
        }).catch((error) => {
            dispatch(fetchOrderError(error));
        });
    };
};

export const checkoutCustomerActions = () => {
    return (dispatch) => {
        dispatch(fetchCustomerBegin());
        checkoutApi.getCustomerInfo().then((response) => {
            dispatch(fetchCustomerSuccess(response.data.data));
        }).catch((error) => {
            dispatch(fetchCustomerError(error));
        });
    }
}