import { checkoutAddressConstants } from "../constants/checkoutAddressConstants";

const INITIAL_STATE = {
  shipping_continue: false, // POST Returned or POST Was not necessary
  shipping_loading: false, // Are we waiting on it?
  shipping_error: undefined, // Did it fail ?
  shipping_toast: false, // Doesn't get reset unless we get a hard reset

  billing_continue: false, // POST Returned or POST Was not necessary
  billing_loading: false, // Are we waiting on it?
  billing_error: undefined, // Did it fail ?
  billing_toast: false, // Doesn't get reset unless we get a hard reset

  info_continue: false, // PUT Returned or PUT Was not necessary
  info_loading: false, // Are we waiting on it?
  info_error: undefined, // Did it fail ?
  info_toast: false, // Doesn't get reset unless we get a hard reset

  continue_requested: false // Signals to start POSTS and PUTS
};

const checkoutAddressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkoutAddressConstants.REQUEST_CONTINUE:
      return {
        ...state,
        continue_requested: action.payload
      };
    // #region Shipping Actions
    case checkoutAddressConstants.SHIPPING_CAN_CONTINUE:
      return {
        ...state,
        shipping_continue: true
      };
    case checkoutAddressConstants.POST_SHIPPING_BEGIN:
      return {
        ...state,
        shipping_loading: true,
        shipping_info: action.payload
      };
    case checkoutAddressConstants.POST_SHIPPING_SUCCESS:
      return {
        ...state,
        shipping_loading: false,
        shipping_continue: true,
        shipping_toast: true
      };
    case checkoutAddressConstants.POST_SHIPPING_ERROR:
      return {
        ...state,
        shipping_loading: false,
        shipping_error: action.payload
      };
    // #endregion
    // #region Billing Actions
    case checkoutAddressConstants.BILLING_CAN_CONTINUE:
      return {
        ...state,
        billing_continue: true
      };
    case checkoutAddressConstants.POST_BILLING_BEGIN:
      return {
        ...state,
        billing_loading: true,
        billing_info: action.payload
      };
    case checkoutAddressConstants.POST_BILLING_SUCCESS:
      return {
        ...state,
        billing_loading: false,
        billing_continue: true,
        billing_toast: true
      };
    case checkoutAddressConstants.POST_BILLING_ERROR:
      return {
        ...state,
        billing_loading: false,
        billing_error: action.payload
      };
    // #endregion
    // #region Guest Info Actions
    case checkoutAddressConstants.INFO_CAN_CONTINUE:
      return {
        ...state,
        info_continue: true
      };
    case checkoutAddressConstants.PUT_INFO_BEGIN:
      return {
        ...state,
        info_loading: true,
        info_info: action.payload
      };
    case checkoutAddressConstants.PUT_INFO_SUCCESS:
      return {
        ...state,
        info_loading: false,
        info_continue: true,
        info_toast: true
      };
    case checkoutAddressConstants.PUT_INFO_ERROR:
      return {
        ...state,
        info_loading: false,
        info_error: action.payload
      };
    // #endregion
    case checkoutAddressConstants.CLEAN_UP:
      return {
        ...state,

        shipping_continue: false,
        shipping_loading: false,
        shipping_error: undefined,

        billing_continue: false,
        billing_loading: false,
        billing_error: undefined,

        info_continue: false,
        info_loading: false,
        info_error: undefined,

        continue_requested: false
      };
    case checkoutAddressConstants.RESET_TOASTS:
      return {
        shipping_toast: false,
        billing_toast: false,
        info_toast: false
      };
    default:
      return state;
  }
};

export default checkoutAddressReducer;
