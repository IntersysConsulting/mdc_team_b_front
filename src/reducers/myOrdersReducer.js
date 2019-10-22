import { myOrdersConstants } from '../constants/myOrdersConstants';

const INITIAL_STATE = {
    orders: [],
    loading: false,
    errors: undefined
};

const myOrdersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case myOrdersConstants.FETCH_ORDERS_BEGIN:
            return { ...state, loading: true}
        case myOrdersConstants.FETCH_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload};
        case myOrdersConstants.FETCH_ORDERS_ERROR:
            return { ...state, loading: false, errors: action.payload};
            
        default:
            return state;
    }
};

export default myOrdersReducer;
