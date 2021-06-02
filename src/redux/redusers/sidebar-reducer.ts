import {SET_MENU} from "../vars";
import {MenuActionType, MenuType} from "../actions/sidebar-action";


type InitialStateType = {
    menu: Array<MenuType>
}
const initialState = {
    menu: []
}

const sidebarReducer = (state: InitialStateType = initialState, action: MenuActionType): InitialStateType => {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.menu
            }
        default:
            return state;
    }
}

export default sidebarReducer;
