import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";


import { reducers as home } from "./pages/Home";


const combine = combineReducers({
  home
});

const store = createStore(combine, applyMiddleware(thunk, logger));

export default store;
