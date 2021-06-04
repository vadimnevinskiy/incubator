import {SET_MENU} from "../vars";
import {MenuActionType, MenuType} from "../../types/types";



export const setMenu = (menu: Array<MenuType>): MenuActionType => {
    return {
        type: SET_MENU,
        menu: menu
    }
}
