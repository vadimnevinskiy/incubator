import {SET_MENU} from "../vars";

const initialState = {
    menu: []
}

const sidebarReducer = (state = initialState, action) => {
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
