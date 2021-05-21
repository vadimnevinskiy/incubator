import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS} from "../vars";

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
