// *******************With Redux and SagaMiddleware********
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import currencyReducer from "./../Currency/reducer";
import rootSagas from "./sagas";
// import counterReducer from "./../counter/reducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  // counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  enhancedComposer(applyMiddleware(sagaMiddleware))
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSagas);

export default store;





// *******************With Redux Only and Without SagaMiddleware********
// import { createStore, combineReducers} from "redux";
// import currencyReducer from "./../Currency/reducer";

// const rootReducer = combineReducers({
//   currency: currencyReducer,
//   // counter: counterReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );



// export default store;





