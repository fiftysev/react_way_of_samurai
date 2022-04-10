import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navbarReducer from "./reducers/navbarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
