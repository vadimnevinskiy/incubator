import {
    FETCHING_TOGGLE,
    SET_CURRENT_PAGE,
    SET_FOLLOWING_USER,
    SET_TOTAL_USERS_COUNT,
    SET_UNFOLLOWING_USER,
    SET_USERS
} from "../vars";

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
export const setFollowingUser = (userId) => {
    return {
        type: SET_FOLLOWING_USER,
        userId: userId
    }
}
export const setUnfollowingUser = (userId) => {
    return {
        type: SET_UNFOLLOWING_USER,
        userId: userId
    }
}
