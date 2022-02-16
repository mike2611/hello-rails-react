import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetingsReducer'

const reducer = combineReducers({
  greetingsReducer
});

const configureStore = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default configureStore;
