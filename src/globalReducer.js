import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";


import { reducers as authLogin } from "./pages/AuthLogin";


const combine = combineReducers({
  authLogin
});

const store = createStore(combine, applyMiddleware(thunk, logger));

export default store;
