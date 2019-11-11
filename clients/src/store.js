import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = composeWithDevTools({
  });

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    ));

export default store;