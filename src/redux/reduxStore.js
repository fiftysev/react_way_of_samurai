import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navbarReducer from "./reducers/navbarReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
});

let store = createStore(reducers);

export default store;
