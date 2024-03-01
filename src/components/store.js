import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {createStore} from 'redux'
import rootReducer from './reducers'; // Assuming you have a root reducer

// Create Redux store with Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
