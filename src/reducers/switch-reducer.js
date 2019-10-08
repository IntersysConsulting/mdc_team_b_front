const INITIAL_STATE = {
    filteredProducts: [],
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
function switchReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'PHYSICAL_SELECTED':
            return {...state, filteredProducts: action.payload};

        case 'DIGITAL_SELECTED':
            return {...state, filteredProducts: action.payload};
        
        default:
            return state;
    }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default switchReducer