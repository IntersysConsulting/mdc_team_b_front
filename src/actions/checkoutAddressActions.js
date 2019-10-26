import { checkoutAddressConstants } from "../constants/checkoutAddressConstants";
import { checkoutAddressApi } from "../api/checkoutAddressApi";
import {
  updateShipping,
  updateBilling,
  updateGuestInfo
} from "./checkoutActions";

//#region
export const setRequestContinue = value => {
  return {
    type: checkoutAddressConstants.REQUEST_CONTINUE,
    payload: value
  };
};
//#endregion

//#region Guest Info
const infoBegin = () => {
  return {
    type: checkoutAddressConstants.PUT_INFO_BEGIN
  };
};
const infoSuccess = () => {
  return {
    type: checkoutAddressConstants.PUT_INFO_SUCCESS
  };
};
const infoError = error => {
  return {
    type: checkoutAddressConstants.PUT_INFO_ERROR,
    payload: error.message
  };
};
export const putInfoActions = info => {
  return dispatch => {
    dispatch(infoBegin());
    checkoutAddressApi
      .putInfo(info)
      .then(() => {
        dispatch(infoSuccess());
        try {
          dispatch(updateGuestInfo(info));
        } catch (e) {
          console.log("Update guest info failed");
          console.log(e);
        }
      })
      .catch(error => {
        dispatch(infoError(error));
      });
  };
};
export const infoCanContinue = () => {
  return {
    type: checkoutAddressConstants.INFO_CAN_CONTINUE
  };
};
//#endregion

//#region Shipping Address
const shippingBegin = () => {
  return {
    type: checkoutAddressConstants.POST_SHIPPING_BEGIN
  };
};
const shippingSuccess = () => {
  return {
    type: checkoutAddressConstants.POST_SHIPPING_SUCCESS
  };
};
const shippingError = error => {
  return {
    type: checkoutAddressConstants.POST_SHIPPING_ERROR,
    payload: error
  };
};

export const postShippingActions = address => {
  return dispatch => {
    dispatch(shippingBegin());
    checkoutAddressApi
      .postShipping(address)
      .then(() => {
        dispatch(shippingSuccess());
        try {
          dispatch(updateShipping(0, address));
        } catch (e) {
          console.log("Update shipping failed");
          console.log(e);
        }
      })
      .catch(error => {
        dispatch(shippingError());
      });
  };
};
export const shippingCanContinue = () => {
  return {
    type: checkoutAddressConstants.SHIPPING_CAN_CONTINUE
  };
};
//#endregion

//#region Shipping Address
const billingBegin = () => {
  return {
    type: checkoutAddressConstants.POST_BILLING_BEGIN
  };
};
const billingSuccess = () => {
  return {
    type: checkoutAddressConstants.POST_BILLING_SUCCESS
  };
};
const billingError = error => {
  return {
    type: checkoutAddressConstants.POST_BILLING_ERROR,
    payload: error
  };
};

export const postBillingActions = address => {
  return dispatch => {
    dispatch(billingBegin());
    checkoutAddressApi
      .postBilling(address)
      .then(() => {
        dispatch(billingSuccess());
        try {
          dispatch(updateBilling(0, address));
        } catch (e) {
          console.log("Update billing failed");
          console.log(e);
        }
      })
      .catch(error => {
        dispatch(billingError());
      });
  };
};

export const billingCanContinue = () => {
  return {
    type: checkoutAddressConstants.BILLING_CAN_CONTINUE
  };
};

//#endregion

export const cleanUp = () => {
  return {
    type: checkoutAddressConstants.CLEAN_UP
  };
};
