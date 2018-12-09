import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './store/reducer';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render( 
  <Provider store = {store} >
    <App />
  </Provider>, document.getElementById('root'));
