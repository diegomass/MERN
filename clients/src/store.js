import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cityReducer from './reducers/cityReducer';

const middleware = [thunk];

const store = createStore(cityReducer, composeWithDevTools(
    applyMiddleware(...middleware),
));

export default store;