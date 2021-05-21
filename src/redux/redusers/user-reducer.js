import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS} from "../vars";

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    fetching: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export default userReducer;
