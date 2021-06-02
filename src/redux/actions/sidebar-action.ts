import {SET_MENU} from "../vars";
import exp from "constants";

export type MenuType = {
    id: number
    name: string
    link: string
}

export type MenuActionType = {
    type: typeof SET_MENU,
    menu: Array<MenuType>
}

export const setMenu = (menu: Array<MenuType>): MenuActionType => {
    return {
        type: SET_MENU,
        menu: menu
    }
}
