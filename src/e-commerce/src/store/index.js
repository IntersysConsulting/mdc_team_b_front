import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let middleware = [thunk]

let logger = createLogger({ collapsed: true })
if (process.env.ENVIRONMENT !== 'production') {
  // Note: logger must be the last middleware in chain,
  // otherwise it will log thunk and promise
  middleware.push(logger)
}

const initialState = {
  token: ''
}

// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
// const store = createStoreWithMiddleware(rootReducer)

export default store;
