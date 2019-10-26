import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import switchReducer from './switch-reducer';
import productReducer from './productReducer';
import authenticationReducer from './authenticationReducer';
import getProductsReducer from './product-management/getProductsReducer';
import addProductReducer from './product-management/addProductReducer';
import checkoutReducer from './checkoutReducer';
import myOrdersReducer from './myOrdersReducer';
import adminReducer from './adminReducer';
import checkoutAddressReducer from "./checkoutAddressReducer";

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
const rootReducer = combineReducers(
    {
        cartState: cartReducer,
        switchState: switchReducer,
        productState: productReducer,
        authenticationState: authenticationReducer,
        viewProductsState: getProductsReducer,
        addProductState: addProductReducer,
        adminState: adminReducer,
        myOrdersState: myOrdersReducer,
        checkoutState: checkoutReducer,
        checkoutAddressState: checkoutAddressReducer
});

export default rootReducer;
