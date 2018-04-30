import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {createLogger} from 'redux-logger';

// Make with the reducers
const reducers = combineReducers({
  form: formReducer
});

// Meddle with the middleware
const middleWares = [];
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
middleWares.push(loggerMiddleware);
const middleWare = applyMiddleware(...middleWares);

// Wrap it all up!
const store = createStore(
  reducers, 
  composeEnhancers(middleWare)
);

export default store;