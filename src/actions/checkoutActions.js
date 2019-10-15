import { checkoutConstants } from '../constants/checkoutConstants';
import { checkoutApi } from '../api/checkoutApi';
import { ResponsiveEmbed } from 'react-bootstrap';

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

//---------------------- Order Update --------------------------------------------------
const fetchOrderUpdateBegin = (order) => {
    return {
        type: checkoutConstants.FETCH_ORDER_UPDATE_BEGIN,
        payload: order
    };
};

const fetchOrderUpdateSuccess = (data) => {
    return {
        type: checkoutConstants.FETCH_ORDER_UPDATE_SUCCESS,
        payload: data,
    };
};

const fetchOrderUpdateError = (error) => {
    return {
        type: checkoutConstants.FETCH_ORDER_UPDATE_ERROR,
        payload: error.message,
    };
};

export const checkoutOrderUpdateActions = (order) => {
    return (dispatch) => {
        dispatch(fetchOrderUpdateBegin(order));
        checkoutApi.updateOrder(order).then((response) => {
            dispatch(fetchOrderUpdateSuccess(response.data.data));
        }).catch((error) => {
            dispatch(fetchOrderUpdateError(error));
        });
    };
};

export const checkoutOrderActions = () => {
    return (dispatch) => {
        dispatch(fetchOrderBegin());
        checkoutApi.getOrderInfo().then((response) => {
            let data = response.data.data.length > 0 ? response.data.data[0] : {products:[]}
            dispatch(fetchOrderSuccess(data));
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

export const updateBilling = (key,address) => {
    return{
        type: checkoutConstants.UPDATE_BILLING_ADDRESS,
        payload: {address:address, key:key}
    }
}

export const updateShipping = (key,address) => {
    return{
        type: checkoutConstants.UPDATE_SHIPPING_ADDRESS,
        payload: {address:address, key:key}
    }
}

export const updatePayment = (payment) => {
    return{
        type: checkoutConstants.UPDATE_PAYMENT_ORDER,
        payload: payment
    }
}