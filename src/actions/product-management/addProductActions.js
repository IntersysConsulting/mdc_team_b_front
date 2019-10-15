import { productManagementConstants } from '../../constants/productManagementConstants';
import {productManagementApi} from '../../api/productManagementApi'

/**
 * Consts to get posts from API implementing API request convention
 * @function postProductBegin
 * @function postProductSuccess
 * @function postProductError
 */


const checkPrivilegesBegin = () => {
    return {
        type: productManagementConstants.CHECK_PRIVILEGES_BEGIN
    };
};

const checkPrivilegesSuccess = (success) => {
    return {
        type: productManagementConstants.CHECK_PRIVILEGES_SUCCESS,
        payload: success.role
    };
};

const checkPrivilegesError = (error) => {
    return {
        type: productManagementConstants.CHECK_PRIVILEGES_ERROR,
        payload: error.message
    };
};

////////////////////////////////////////////////////////////////////

const postProductBegin = () => {
    return {
        type: productManagementConstants.POST_PRODUCT_BEGIN
    };
};

const postProductSuccess = (success) => {
    return {
        type: productManagementConstants.postProductSuccess,
        payload: success.message
    };
};

const postProductError = (error) => {
    return {
        type: productManagementConstants.POST_PRODUCT_ERROR,
        payload: error.message
    };
};

/////////////////////////////////////////////////////////////////////


export const checkPrivilegesAction = () => {
    return (dispatch) => {
        dispatch(checkPrivilegesBegin());
        productManagementApi.checkPrivileges().then((response) => {
            dispatch(checkPrivilegesSuccess(response.data));
        }).catch((error) => {
            dispatch(checkPrivilegesError(error));
        });
    };
};

export const postProductAction = (formData) => {
    return (dispatch) => {
        dispatch(postProductBegin());
        productManagementApi.postProductAdmin(formData).then((response) => {
            dispatch(postProductSuccess(response.data));
        }).catch((error) => {
            dispatch(postProductError(error));
        });
    };
};
