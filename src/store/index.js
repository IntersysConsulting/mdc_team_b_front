import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devToolsEnhancer()))

export default store;
