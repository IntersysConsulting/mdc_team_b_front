import { checkoutConstants } from '../constants/checkoutConstants';

const INITIAL_STATE = {
    items: [],
    order: {},
    shipping_address: [],
    billing_address: [],
    errors: undefined,
    order_loading: false,
    shipping_loading: false,
    billing_loading: false,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case checkoutConstants.FETCH_CHECKOUT_ORDER_BEGIN:
            return { ...state, order_loading: true };

        case checkoutConstants.FETCH_CHECKOUT_ORDER_SUCCESS:
            return { ...state, order_loading: false, order: action.payload };

        case checkoutConstants.FETCH_CHECKOUT_ORDER_ERROR:
            return { ...state, order_loading: false, errors: action.payload };






        case checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_BEGIN:
            return { ...state, shipping_loading: true };

        case checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_SUCCESS:
            return { ...state, shipping_loading: false, shipping_address: action.payload };

        case checkoutConstants.FETCH_CHECKOUT_SHIPPING_ADDRESS_ERROR:
            return { ...state, shipping_loading: false, errors: action.payload };




        case checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_BEGIN:
            return { ...state, billing_loading: true };

        case checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_SUCCESS:
            return { ...state, billing_loading: false, billing_address: action.payload };

        case checkoutConstants.FETCH_CHECKOUT_BILLING_ADDRESS_ERROR:
            return { ...state, billing_loading: false, errors: action.payload };

        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default checkoutReducer;
