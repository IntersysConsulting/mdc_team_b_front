import { checkoutConstants } from '../constants/checkoutConstants';

const INITIAL_STATE = {
    order: {},
    shipping_address: [],
    billing_address: [],
    errors: undefined,
    loading_customer: false,
    loading_put: false,
    loading_order: false,
    loading_create: false
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //Actions for checkout order
        case checkoutConstants.FETCH_ORDER_BEGIN:
            return { ...state, loaing_order: true }
        case checkoutConstants.FETCH_ORDER_SUCCESS:
            return { ...state, loaing_order: false, order: action.payload };
        case checkoutConstants.FETCH_ORDER_ERROR:
            return { ...state, loaing_order: false, errors: action.payload };
            
        //Actions for customer order
        case checkoutConstants.FETCH_CUSTOMER_BEGIN:
            return { ...state, loading_customer: true };
        case checkoutConstants.FETCH_CUSTOMER_SUCCESS:
            return { ...state, loading_customer: false, shipping_address: action.payload.shipping_address, billing_address: action.payload.billing_address };
        case checkoutConstants.FETCH_CUSTOMER_ERROR:
            return { ...state, loading_customer: false, errors: action.payload };

        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default checkoutReducer;
