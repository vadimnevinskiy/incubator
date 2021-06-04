import {SET_MENU} from "../vars";
import {MenuActionType, SidebarStateType} from "../../types/types";



const initialState: SidebarStateType = {
    menu: []
}

const sidebarReducer = (state: SidebarStateType = initialState, action: MenuActionType): SidebarStateType => {
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
