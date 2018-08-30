
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import { hashHistory } from 'react-router'

const reduxRouterMiddleware = routerMiddleware(hashHistory);

 function configure(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        reduxRouterMiddleware
      ),
    )
  )
}
const store = configure();
export default store;