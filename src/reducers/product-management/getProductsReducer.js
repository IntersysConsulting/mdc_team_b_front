import { productManagementConstants } from '../../constants/productManagementConstants';

const INITIAL_STATE = {
    products: [],
    total_products: 0,
    errors: undefined,
    message: undefined,
    loading: false,
    opened_page: 0,
    deleted_product: false
};

const getProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productManagementConstants.FETCH_PRODUCTS_BEGIN:
            return { ...state, loading: true };

        case productManagementConstants.FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload.data, total_products: action.payload.total, deleted_product: false};

        case productManagementConstants.FETCH_PRODUCTS_ERROR:
            return { ...state, loading: false, errors: action.payload };

        case productManagementConstants.SET_NEW_PAGE:
            return { ...state, opened_page: action.payload }

        case productManagementConstants.DELETE_PRODUCT_BEGIN:
            return { ...state };

        case productManagementConstants.DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, message: action.payload, deleted_product: true};

        case productManagementConstants.DELETE_PRODUCT_ERROR:
            return { ...state, loading: false, errors: action.payload };

        default:
            return state;
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default getProductsReducer;