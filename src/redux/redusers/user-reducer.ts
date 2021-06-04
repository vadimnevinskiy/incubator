import {SET_CURRENT_PAGE, SET_FOLLOWING_USER, SET_TOTAL_USERS_COUNT, SET_USERS} from "../vars";
import {
    CurrentPageType,
    FollowingUserType,
    TotalUsersCountType, UnfollowingUserType,
    UsersActionsType,
    UserStateType
} from "../../types/types";



const initialState: UserStateType = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1
}

const userReducer = (state: UserStateType = initialState, action: UsersActionsType | TotalUsersCountType | CurrentPageType | FollowingUserType | UnfollowingUserType): UserStateType => {
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
        case SET_FOLLOWING_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        };
                    } else {
                        return {
                            ...user
                        }
                    }
                }),
            }
        default:
            return state;
    }
}

export default userReducer;
