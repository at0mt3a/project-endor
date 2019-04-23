import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  logger,
  store => next => action => next(action),
  sagaMiddleware
)(createStore);

// const rootReducer = combineReducers(reducers)

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(sagas);

export default store;
