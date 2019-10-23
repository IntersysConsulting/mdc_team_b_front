import { checkoutConstants } from "../constants/checkoutConstants";
import { checkoutApi } from "../api/checkoutApi";

//---------------------- Order --------------------------------------------------
const fetchOrderBegin = () => {
  return {
    type: checkoutConstants.FETCH_ORDER_BEGIN
  };
};

const fetchOrderSuccess = order => {
  return {
    type: checkoutConstants.FETCH_ORDER_SUCCESS,
    payload: order
  };
};

const fetchOrderError = error => {
  return {
    type: checkoutConstants.FETCH_ORDER_ERROR,
    payload: error.message
  };
};

//---------------------- Customer --------------------------------------------------
const fetchCustomerBegin = () => {
  return {
    type: checkoutConstants.FETCH_CUSTOMER_BEGIN
  };
};

const fetchCustomerSuccess = data => {
  return {
    type: checkoutConstants.FETCH_CUSTOMER_SUCCESS,
    payload: data
  };
};

const fetchCustomerError = error => {
  return {
    type: checkoutConstants.FETCH_CUSTOMER_ERROR,
    payload: error.message
  };
};

//#region Order Update
const fetchOrderUpdateBegin = order => {
  return {
    type: checkoutConstants.FETCH_ORDER_UPDATE_BEGIN,
    payload: order
  };
};

const fetchOrderUpdateSuccess = data => {
  return {
    type: checkoutConstants.FETCH_ORDER_UPDATE_SUCCESS,
    payload: data
  };
};

const fetchOrderUpdateError = error => {
  return {
    type: checkoutConstants.FETCH_ORDER_UPDATE_ERROR,
    payload: error.message
  };
};

//#endregion

export const checkoutOrderUpdateActions = order => {
  return dispatch => {
    dispatch(fetchOrderUpdateBegin(order));
    checkoutApi
      .updateOrder(order)
      .then(response => {
        dispatch(fetchOrderUpdateSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchOrderUpdateError(error));
      });
  };
};

export const checkoutOrderActions = () => {
  return dispatch => {
    dispatch(fetchOrderBegin());
    checkoutApi
      .getOrderInfo()
      .then(response => {
        let data =
          response.data.data.length > 0
            ? response.data.data[0]
            : { products: [] };
        dispatch(fetchOrderSuccess(data));
      })
      .catch(error => {
        dispatch(fetchOrderError(error));
      });
  };
};

export const checkoutCustomerActions = () => {
  return dispatch => {
    dispatch(fetchCustomerBegin());
    checkoutApi
      .getCustomerInfo()
      .then(response => {
        dispatch(fetchCustomerSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchCustomerError(error));
      });
  };
};

export const updateBilling = (key, address) => {
  return {
    type: checkoutConstants.UPDATE_BILLING_ADDRESS,
    payload: { address: address, key: key }
  };
};

export const updateShipping = (key, address) => {
  return {
    type: checkoutConstants.UPDATE_SHIPPING_ADDRESS,
    payload: { address: address, key: key }
  };
};

export const updatePayment = payment => {
  return {
    type: checkoutConstants.UPDATE_PAYMENT_ORDER,
    payload: payment
  };
};

// New Shipping and Billing Implementation

export const newShipping = address => {
  return {
    type: checkoutConstants.NEW_SHIPPING_ADDRESS,
    payload: { address: address }
  };
};

export const newBilling = address => {
  return {
    type: checkoutConstants.NEW_BILLING_ADDRESS,
    payload: { address: address }
  };
};

const fetchPostShippingBegin = () => {
  return {
    type: checkoutConstants.POST_NEW_SHIPPING_ADDRESS_BEGIN
  };
};

const fetchPostShippingSuccess = () => {
  return {
    type: checkoutConstants.POST_NEW_SHIPPING_ADDRESS_SUCCESS
  };
};

const fetchPostShippingError = error => {
  return {
    type: checkoutConstants.POST_NEW_SHIPPING_ADDRESS_ERROR,
    payload: error.message
  };
};

export const setNewShipping = address => {
  return dispatch => {
    dispatch(newShipping(address));
  };
};

export const postNewShipping = address => {
  return dispatch => {
    dispatch(fetchPostShippingBegin(address));
    checkoutApi
      .postShippingAddress(address)
      .then(response => {
        dispatch(fetchPostShippingSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchPostShippingError(error));
      });
  };
};

export const setPostAddresses = value => {
  return {
    type: checkoutConstants.SHOULD_POST_ADDRESSES,
    payload: value
  };
};

const fetchPostBillingBegin = () => {
  return {
    type: checkoutConstants.POST_NEW_BILLING_ADDRESS_BEGIN
  };
};

const fetchPostBillingSuccess = () => {
  return {
    type: checkoutConstants.POST_NEW_BILLING_ADDRESS_SUCCESS
  };
};

const fetchPostBillingError = error => {
  return {
    type: checkoutConstants.POST_NEW_BILLING_ADDRESS_ERROR,
    payload: error.message
  };
};

export const setNewBilling = address => {
  return dispatch => {
    dispatch(newBilling(address));
  };
};

export const postNewBilling = address => {
  return dispatch => {
    dispatch(fetchPostBillingBegin(address));
    checkoutApi
      .postBillingAddress(address)
      .then(response => {
        dispatch(fetchPostBillingSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchPostBillingError(error));
      });
  };
};

export const cleanUp = () => {
  return {
    type: checkoutConstants.CLEAN_UP
  };
};
