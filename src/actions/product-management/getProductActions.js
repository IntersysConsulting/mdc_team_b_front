import { productManagementConstants } from '../../constants/productManagementConstants';
import {productManagementApi} from '../../api/productManagementApi'

/**
 * Consts to get posts from API implementing API request convention
 * @function fetchProductsBegin
 * @function fetchProductsSuccess
 * @function fetchProductsError
 * @function setNewPage
 * 
 * @function deleteProductBegin
 * @function deleteProductSuccess
 * @function deleteProductError
 */

const fetchProductsBegin = () => {
    return {
        type: productManagementConstants.FETCH_PRODUCTS_BEGIN
    };
};

const fetchProductsSuccess = (products) => {
    return {
        type: productManagementConstants.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};

const fetchProductsError = (error) => {
    return {
        type: productManagementConstants.FETCH_PRODUCTS_ERROR,
        payload: error.message
    };
};

const setNewPage = (newPage) => {
    return{
        type: productManagementConstants.SET_NEW_PAGE,
        payload: newPage
    }
}

const deleteProductBegin = () => {
    return {
        type: productManagementConstants.DELETE_PRODUCT_BEGIN
    };
};

const deleteProductSuccess = (success) => {
    return {
        type: productManagementConstants.DELETE_PRODUCT_SUCCESS,
        payload: success.message
    };
};

const deleteProductError = (error) => {
    return {
        type: productManagementConstants.DELETE_PRODUCT_ERROR,
        payload: error.message
    };
};

export const getProductsAction = (page, page_size) => {
    return (dispatch) => {
        dispatch(fetchProductsBegin(page));
        productManagementApi.getProductsAdmin(page, page_size).then((response) => {
            dispatch(fetchProductsSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchProductsError(error));
        });
    };
};

export function changePageAction (page) {
    return(dispatch) => {
        dispatch(setNewPage(page));
    }
}

export const deleteProductAction = (id_product) => {
    return (dispatch) => {
        dispatch(deleteProductBegin());
        productManagementApi.deleteProductAdmin(id_product).then((response) => {
            dispatch(deleteProductSuccess(response.data));
        }).catch((error) => {
            dispatch(deleteProductError(error));
        });
    };
};
