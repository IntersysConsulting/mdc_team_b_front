import { checkoutConstants } from '../constants/checkoutConstants';
import { checkoutApi } from '../api/checkoutApi';
/**
 * Consts to get posts from API implementing API request convention
 * @function fetchCheckoutOrderBegin
 * @function fetchCheckoutOrderSuccess
 * @function fetchcheckoutOrderError
 * @function fetchCustomerBegin
 * @function fetchCustomerSuccess
 * @function fetchCustomerError
 */

//---------------------- Order --------------------------------------------------
const fetchCheckoutOrderBegin = () => {
    return {
        type: checkoutConstants.FETCH_ORDER_BEGIN,
    };
};

const fetchCheckoutOrderSuccess = (order) => {
    return {
        type: checkoutConstants.FETCH_ORDER_SUCCESS,
        payload: order,
    };
};

const fetchCheckoutOrderError = (error) => {
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

const fetchCustomerSuccess = (info) => {
    return {
        type: checkoutConstants.FETCH_CUSTOMER_SUCCESS,
        payload: info,
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
        dispatch(fetchCheckoutOrderBegin());
        checkoutApi.getOrderInfo().then((response) => {
            dispatch(fetchCheckoutOrderSuccess(response.data.data[0]));
        }).catch((error) => {
            dispatch(fetchCheckoutOrderError(error));
        });
    };
};

export const checkoutCustomerActions = () => {
    return (dispatch) => {
        dispatch(fetchCustomerBegin());
        checkoutApi.getAllBillingAddresses().then((response) => {
            dispatch(fetchCustomerSuccess(response.data.data));
        }).catch((error) => {
            dispatch(fetchCustomerError(error));
        });
    }
}