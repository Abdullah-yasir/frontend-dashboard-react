import { combineReducers, createStore } from "redux";
import modalReducer from "./reducers/modalReducer";

const reducer = combineReducers({
  Modal: modalReducer
});

const store = createStore(reducer);

export default store;