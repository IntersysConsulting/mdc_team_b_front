import { myOrdersConstants } from '../constants/myOrdersConstants';
import { myOrdersApi } from '../api/myOrdersApi';

//---------------------- Orders --------------------------------------------------
const fetchOrdersBegin = () => {
    return {
        type: myOrdersConstants.FETCH_ORDERS_BEGIN,
    };
};

const fetchOrdersSuccess = (orders) => {
    return {
        type: myOrdersConstants.FETCH_ORDERS_SUCCESS,
        payload: orders,
    };
};

const fetchOrdersError = (error) => {
    return {
        type: myOrdersConstants.FETCH_ORDERS_ERROR,
        payload: error.message,
    };
};



export const myOrdersActions = () => {
    return (dispatch) => {
        dispatch(fetchOrdersBegin());
        console.log("aqui alv")
        myOrdersApi.getAllOrders().then((response) => {
            dispatch(fetchOrdersSuccess(response.data.data));
        }).catch((error) => {
            dispatch(fetchOrdersError(error));
        });
    }
}