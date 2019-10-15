import { productManagementConstants } from '../../constants/productManagementConstants';

const INITIAL_STATE = {
    privileges: "Unknown",
    message: undefined,
    awaiting_response: false
};

const addProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productManagementConstants.CHECK_PRIVILEGES_BEGIN:
            return {...state, awaiting_response: true};

        case productManagementConstants.CHECK_PRIVILEGES_SUCCESS:
            return {...state, awaiting_response: false, privileges: action.payload };

        case productManagementConstants.CHECK_PRIVILEGES_ERROR:
            return { ...state, awaiting_response: false, errors: action.payload};


        case productManagementConstants.POST_PRODUCT_BEGIN:
            return { ...state, awaiting_response: true };

        case productManagementConstants.POST_PRODUCT_SUCCESS:
            return { ...state, awaiting_response: false, message: action.payload };

        case productManagementConstants.POST_PRODUCT_ERROR:
            return { ...state, awaiting_response: false, message: action.payload };

        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default addProductReducer;