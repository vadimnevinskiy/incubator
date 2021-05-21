import {combineReducers, createStore} from "redux";
import userReducer from "./redusers/user-reducer";
import sidebarReducer from "./redusers/sidebar-reducer";

const reducers = combineReducers({
    sidebar: sidebarReducer,
    userPage: userReducer
})


let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store;
export default store;
