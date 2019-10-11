import { checkoutConstants } from '../constants/checkoutConstants';

const INITIAL_STATE = {
    products: [],
    order: {
        billing: 0,
        shipping: 0,
        payment: "fake",
        products: []
    },
    shipping_address: [],
    billing_address: [],
    errors: undefined,
    order_loading: false,
    shipping_loading: false,
    billing_loading: false,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //Actions for checkout order
        case checkoutConstants.FETCH_ORDER_BEGIN:
            return { ...state, order_loading: true }
        case checkoutConstants.FETCH_ORDER_SUCCESS:
            return { ...state, order_loading: false, order: action.payload };
        case checkoutConstants.FETCH_ORDER_ERROR:
            return { ...state, order_loading: false, errors: action.payload };

        //Actions for checkout order
        case checkoutConstants.FETCH_CUSTOMER_BEGIN:
            return { ...state, order_loading: true };
        case checkoutConstants.FETCH_CUSTOMER_SUCCESS:
            return { ...state, order_loading: false, products: action.payload };
        case checkoutConstants.FETCH_CUSTOMER_ERROR:
            return { ...state, order_loading: false, errors: action.payload };

        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default checkoutReducer;
