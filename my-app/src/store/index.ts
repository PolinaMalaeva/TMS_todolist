import { createStore } from "redux";
import combineReducers from "./reducer/combineReducers";

export default createStore(combineReducers);