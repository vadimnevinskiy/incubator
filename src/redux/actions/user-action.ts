import {
    SET_CURRENT_PAGE,
    SET_FOLLOWING_USER,
    SET_TOTAL_USERS_COUNT,
    SET_UNFOLLOWING_USER,
    SET_USERS
} from "../vars";
import {
    CurrentPageType,
    FollowingUserType,
    TotalUsersCountType,
    UnfollowingUserType,
    UsersActionsType,
    UserType
} from "../../types/types";





export const setUsers = (users: Array<UserType>): UsersActionsType => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setTotalUsersCount = (totalCount: number): TotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}

export const setCurrentPage = (currentPage: number): CurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setFollowingUser = (userId: number): FollowingUserType => {
    return {
        type: SET_FOLLOWING_USER,
        userId: userId
    }
}
export const setUnfollowingUser = (userId: number): UnfollowingUserType => {
    return {
        type: SET_UNFOLLOWING_USER,
        userId: userId
    }
}
