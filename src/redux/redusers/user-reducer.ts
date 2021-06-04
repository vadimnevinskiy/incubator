import {FETCHING_TOGGLE, SET_CURRENT_PAGE, SET_FOLLOWING_USER, SET_TOTAL_USERS_COUNT, SET_USERS} from "../vars";
import {
    CurrentPageType,
    FollowingUserType,
    TotalUsersCountType,
    UnfollowingUserType,
    UsersActionsType
} from "../actions/user-action";

type PhotoType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string | null
    id: number
    uniqueUrlName: string | null
    photos: PhotoType
    status: string | null
    followed: boolean
}

type InitialStateType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
}

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1
}

const userReducer = (state: InitialStateType = initialState, action: UsersActionsType | TotalUsersCountType | CurrentPageType | FollowingUserType | UnfollowingUserType): InitialStateType => {
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
