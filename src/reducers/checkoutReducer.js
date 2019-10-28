import { checkoutConstants } from "../constants/checkoutConstants";

const INITIAL_STATE = {
  order: {
    products: [],
    _id: undefined
  },
  shipping_address: [],
  billing_address: [],
  customer_error: undefined,
  order_error: undefined,
  loading_customer: false,
  loading_put: false,
  loading_order: false,
  newOrder: {
    billing_address: undefined,
    shipping_address: undefined,
    payment: undefined
  },
  guest_info: undefined,
  did_put_respond: false,
  put_error: undefined
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  let order = state.order;
  let newOrder = state.newOrder;
  let shipping_address = state.shipping_address;
  let billing_address = state.billing_address;

  switch (action.type) {
    // #region Action for writing billing, shipping and payment information
    case checkoutConstants.UPDATE_BILLING:
      return {
        ...state,
        newOrder: { ...newOrder, billing_address: action.payload.index },
        billing_address: [...billing_address, action.payload.address]
      };
    case checkoutConstants.UPDATE_SHIPPING:
      return {
        ...state,
        newOrder: { ...newOrder, shipping_address: action.payload.index },
        shipping_address: [...shipping_address, action.payload.address]
      };
    case checkoutConstants.UPDATE_GUEST_INFO:
      return {
        ...state,
        guest_info: action.payload
      };
    case checkoutConstants.UPDATE_PAYMENT_ORDER:
      return {
        ...state,
        order: { ...order, payment: action.payload },
        newOrder: { ...newOrder, payment: action.payload }
      };
    //#endregion
    // #region Actions for sending and receiving the PUT on the order to the back end
    case checkoutConstants.FETCH_ORDER_UPDATE_BEGIN:
      return { ...state, loading_put: true };
    case checkoutConstants.FETCH_ORDER_UPDATE_SUCCESS:
      return {
        ...state,
        loading_put: false,
        newOrder: action.payload,
        did_put_respond: true
      };
    case checkoutConstants.FETCH_ORDER_UPDATE_ERROR:
      return { ...state, loading_put: false, put_error: action.payload };
    // #endregion
    // #region Actions for sending and receiving the GET on the order to the back end
    case checkoutConstants.FETCH_ORDER_BEGIN:
      return {
        ...state,
        loading_order: true
      };
    case checkoutConstants.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading_order: false,
        order: action.payload
      };
    case checkoutConstants.FETCH_ORDER_ERROR:
      return {
        ...state,
        loading_order: false,
        order_error: action.payload
      };
    case checkoutConstants.FETCH_CUSTOMER_BEGIN:
      return {
        ...state,
        loading_customer: true
      };
    case checkoutConstants.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading_customer: false,
        billing_address:
          action.payload.billing_addresses !== undefined
            ? action.payload.billing_addresses
            : [],
        shipping_address:
          action.payload.shipping_addresses !== undefined
            ? action.payload.shipping_addresses
            : [],
        newOrder: {
          ...newOrder,
          shipping_address:
            action.payload.shipping_addresses !== undefined &&
            action.payload.shipping_addresses.length > 0
              ? 0
              : undefined,
          billing_address:
            action.payload.billing_addresses !== undefined &&
            action.payload.billing_addresses.length > 0
              ? 0
              : undefined
        }
      };
    case checkoutConstants.FETCH_CUSTOMER_ERROR:
      return {
        ...state,
        loading_customer: false,
        customer_error: action.payload
      };
    //#endregion
    case checkoutConstants.CLEAN_UP:
      return {
        ...state,
        order: {
          products: []
        },
        shipping_address: [],
        billing_address: [],
        customer_error: undefined,
        order_error: undefined,
        loading_customer: false,
        loading_put: false,
        loading_order: false,
        loading_billing: false,
        loading_shipping: false,
        did_put_respond: false,
        newOrder: {
          billing_address: undefined,
          shipping_address: undefined,
          payment: undefined
        },
        put_error: undefined,
        new_billing: undefined,
        post_billing_error: undefined,
        new_shipping: undefined,
        post_shipping_error: undefined,
        should_update_addresses: false
      };
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default checkoutReducer;
