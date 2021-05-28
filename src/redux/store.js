import {combineReducers, createStore} from "redux";
import userReducer from "./redusers/user-reducer";
import sidebarReducer from "./redusers/sidebar-reducer";
import profileReducer from "./redusers/profile-reducer";
import generalReducer from "./redusers/general-reducer";
import authReducer from "./redusers/auth-reducer";

const reducers = combineReducers({
    sidebar: sidebarReducer,
    userPage: userReducer,
    profilePage : profileReducer,
    general: generalReducer,
    auth: authReducer
})


let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store;
export default store;
