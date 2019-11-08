import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify custom devTools options
));