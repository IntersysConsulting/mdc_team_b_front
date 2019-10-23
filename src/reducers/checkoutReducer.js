import { checkoutConstants } from "../constants/checkoutConstants";

const INITIAL_STATE = {
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

const checkoutReducer = (state = INITIAL_STATE, action) => {
  let order = state.order;
  let newOrder = state.newOrder;

  switch (action.type) {
    // #region Action for writing billing, shipping and payment information
    case checkoutConstants.UPDATE_BILLING_ADDRESS:
      return {
        ...state,
        order: { ...order, billing_address: action.payload.address },
        newOrder: { ...newOrder, billing_address: action.payload.key }
      };
    case checkoutConstants.UPDATE_SHIPPING_ADDRESS:
      return {
        ...state,
        order: { ...order, shipping_address: action.payload.address },
        newOrder: { ...newOrder, shipping_address: action.payload.key }
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
    //#endregion
    // #region Actions for sending and receiving the GET on the customer to the back end
    case checkoutConstants.FETCH_CUSTOMER_BEGIN:
      return {
        ...state,
        loading_customer: true
      };
    case checkoutConstants.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading_customer: false,
        shipping_address:
          action.payload.shipping_addresses !== undefined
            ? action.payload.shipping_addresses
            : [],
        billing_address:
          action.payload.billing_addresses !== undefined
            ? action.payload.billing_addresses
            : [],
        newOrder: {
          billing_address:
            action.payload.billing_addresses !== undefined
              ? action.payload.billing_addresses.length > 0
                ? 0
                : undefined
              : undefined,
          shipping_address:
            action.payload.shipping_addresses !== undefined
              ? action.payload.shipping_addresses.length > 0
                ? 0
                : undefined
              : undefined,
          payment: undefined
        }
      };
    case checkoutConstants.FETCH_CUSTOMER_ERROR:
      return {
        ...state,
        loading_customer: false,
        customer_error: action.payload
      };
    //#endregion
    //#region Adding a new billing address
    case checkoutConstants.NEW_BILLING_ADDRESS:
      return {
        ...state,
        new_billing: action.payload.address,
        should_update_addresses: false
      };
    case checkoutConstants.POST_NEW_BILLING_ADDRESS_BEGIN:
      return {
        ...state,
        loading_billing: true
      };
    case checkoutConstants.POST_NEW_BILLING_ADDRESS_SUCCESS:
      return {
        ...state,
        loading_billing: false,
        new_billing: undefined,
        newOrder: {
          shipping_address: newOrder.shipping_address,
          billing_address: 0,
          payment: newOrder.payment
        }
      };
    case checkoutConstants.POST_NEW_BILLING_ADDRESS_ERROR:
      return {
        ...state,
        loading_billing: false,
        post_billing_error: action.payload
      };
    //#endregion
    //#region Adding a new billing address
    case checkoutConstants.NEW_SHIPPING_ADDRESS:
      return {
        ...state,
        new_shipping: action.payload.address,
        should_update_addresses: false
      };
    case checkoutConstants.POST_NEW_SHIPPING_ADDRESS_BEGIN:
      return {
        ...state,
        loading_shipping: true
      };
    case checkoutConstants.POST_NEW_SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        loading_shipping: false,
        new_shipping: undefined,
        newOrder: {
          shipping_address: 0,
          billing_address: newOrder.billing_address,
          payment: newOrder.payment
        }
      };
    case checkoutConstants.POST_NEW_SHIPPING_ADDRESS_ERROR:
      return {
        ...state,
        loading_shipping: false,
        post_shipping_error: action.payload
      };
    //#endregion
    case checkoutConstants.SHOULD_POST_ADDRESSES:
      return {
        ...state,
        should_update_addresses: action.payload
      };
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
