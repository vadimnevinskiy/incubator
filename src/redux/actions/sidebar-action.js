import {SET_MENU} from "../vars";

export const setMenu = (menu) => {
    return {
        type: SET_MENU,
        menu: menu
    }
}
