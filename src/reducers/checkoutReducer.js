import { checkoutConstants } from '../constants/checkoutConstants';

const INITIAL_STATE = {
    order: {
        products: []
    },
    shipping_address: [],
    billing_address: [],
    errors: undefined,
    loading_customer: false,
    loading_put: false,
    loading_order: false,
    updated:false,
    newOrder: {
        billing_address: 0,
        shipping_address: 0,
        payment: "payment"
    },
    errorUpdate: undefined
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
    let order = state.order;
    let newOrder = state.newOrder;

    switch (action.type) {

        //Action for update order
        case checkoutConstants.UPDATE_BILLING_ADDRESS:
            return {...state, order:{...order, billing_address:action.payload.address}, newOrder:{...newOrder, billing_address: action.payload.key}};
        case checkoutConstants.UPDATE_SHIPPING_ADDRESS:
            return {...state, order:{...order, shipping_address:action.payload.address}, newOrder:{...newOrder, shipping_address: action.payload.key}};
        case checkoutConstants.UPDATE_PAYMENT_ORDER:
            return {...state, order:{...order, payment:action.payload}, newOrder:{...newOrder, payment: action.payload}};

            //Actions for update checkout order
        case checkoutConstants.FETCH_ORDER_UPDATE_BEGIN:
            return { ...state, loading_put: true }
        case checkoutConstants.FETCH_ORDER_UPDATE_SUCCESS:
            return { ...state, loading_put: false, newOrder: action.payload, updated:true };
        case checkoutConstants.FETCH_ORDER_UPDATE_ERROR:
            return { ...state, loading_put: false, errorUpdate: action.payload };

        //Actions for checkout order
        case checkoutConstants.FETCH_ORDER_BEGIN:
            return { ...state, loading_order: true, updated: false, errorUpdate: undefined}
        case checkoutConstants.FETCH_ORDER_SUCCESS:
            return { ...state, loading_order: false, loading_put: false, order: action.payload, updated: false };
        case checkoutConstants.FETCH_ORDER_ERROR:
            return { ...state, loading_order: false, loading_put: false, errors: action.payload};
            
        //Actions for customer order
        case checkoutConstants.FETCH_CUSTOMER_BEGIN:
            return { ...state, loading_customer: true, updated: false, errorUpdate: undefined };
        case checkoutConstants.FETCH_CUSTOMER_SUCCESS:
            return { ...state, loading_customer: false, loading_put: false, shipping_address: action.payload.shipping_addresses, billing_address: action.payload.billing_addresses };
        case checkoutConstants.FETCH_CUSTOMER_ERROR:
            return { ...state, loading_customer: false, loading_put: false, errors: action.payload };
        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default checkoutReducer;
