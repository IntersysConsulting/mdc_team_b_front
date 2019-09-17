import {cartConstants} from '../constants/cartConstants'

const INITIAL_STATE = {
  items: [],
  errors: undefined,
  loading: false,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartConstants.FETCH_CART_BEGIN:
      return {...state, loading: true};

    case cartConstants.FETCH_CART_SUCCESS:
      return {...state, loading: false, items: action.payload};

    case cartConstants.FETCH_CART_ERROR:
      return {...state, loading: false, errors: action.payload};

    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default cartReducer;
