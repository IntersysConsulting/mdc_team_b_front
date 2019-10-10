import { checkoutConstants } from '../constants/checkoutConstants';
import { checkoutOrderApi } from '../api/checkoutOrderApi';
import { shippingApi } from '../api/shippingApi';
import { billingApi } from '../api/billingApi';

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchCheckoutOrderBegin
 * @function fetchCheckoutOrderSuccess
 * @function fetchcheckoutOrderError
 * @function fetchCheckoutShippingAddressBegin
 * @function fetchCheckoutShippingAddressSuccess
 * @function fetchCheckoutShippingAddressError
 * @function fetchCheckoutBillingAddressBegin
 * @function fetchCheckoutBillingAddressSuccess
 * @function fetchCheckoutBillingAddressError
 */

const fetchCheckoutOrderBegin = () => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_ORDER_BEGIN,
    };
};

const fetchCheckoutOrderSuccess = (order) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_ORDER_SUCCESS,
        payload: order,
    };
};

const fetchCheckoutOrderError = (error) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_ORDER_ERROR,
        payload: error.message,
    };
};





const fetchCheckoutShippingAddressBegin = () => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_BEGIN,
    };
};

const fetchCheckoutShippingAddressSuccess = (shipping_address) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_SUCCESS,
        payload: shipping_address,
    };
};

const fetchCheckoutShippingAddressError = (error) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_ERROR,
        payload: error.message,
    };
};





const fetchCheckoutBillingAddressBegin = () => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_BEGIN,
    };
};

const fetchCheckoutBillingAddressSuccess = (billing_address) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_SUCCESS,
        payload: billing_address,
    };
};

const fetchCheckoutBillingAddressError = (error) => {
    return {
        type: checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_ERROR,
        payload: error.message,
    };
};




export const checkoutOrderActions = () => {
    return (dispatch) => {
        dispatch(fetchCheckoutOrderBegin());
        checkoutOrderApi.getOrderInfo().then((response) => {
            dispatch(fetchCheckoutOrderSuccess(response.data.data.products));
        }).catch((error) => {
            dispatch(fetchCheckoutOrderError(error));
        });
    };
};

export const checkoutShippingAddressActions = () => {
    return (dispatch) => {
        dispatch(fetchCheckoutShippingAddressBegin());
        shippingApi.getAllShippingAddresses().then((response) => {
            dispatch(fetchCheckoutShippingAddressSuccess(response.data.data.shipping_addresses));
        }).catch((error) => {
            dispatch(fetchCheckoutShippingAddressError(error));
        });
    }
}

export const checkoutBillingAddressActions = () => {
    return (dispatch) => {
        dispatch(fetchCheckoutBillingAddressBegin());
        billingApi.getAllBillingAddresses().then((response) => {
            dispatch(fetchCheckoutBillingAddressSuccess(response.data.data.billing_addresses));
        }).catch((error) => {
            dispatch(fetchCheckoutBillingAddressError(error));
        });
    }
}