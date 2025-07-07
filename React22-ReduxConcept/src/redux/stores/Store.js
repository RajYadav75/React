import {legacy_createStore as createStore,applyMiddleware}  from "redux";
import myReducer from "../reducers/myReducer.js";
import logger from "redux-logger";
let myReduxStore = createStore(myReducer,applyMiddleware(logger));

export default myReduxStore;