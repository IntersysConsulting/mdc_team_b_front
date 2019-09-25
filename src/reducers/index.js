import {combineReducers} from 'redux';

import cartReducer from "./cartReducer";
import switchReducer from './switch-reducer';
import productReducer from './productReducer';
import authReducer from './authReducer';

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
const rootReducer = combineReducers(
    {
        cartState: cartReducer,
        switchState: switchReducer,
        productState: productReducer,
        authState: authReducer
    }
);

export default rootReducer;
