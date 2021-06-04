import {
    FETCHING_TOGGLE,
    SET_AUTH_ID, SET_CURRENT_PAGE,
    SET_DIALOGS, SET_FOLLOWING_USER, SET_MENU,
    SET_MESSAGES,
    SET_PROFILE,
    SET_STATUS, SET_TOTAL_USERS_COUNT, SET_UNFOLLOWING_USER,
    SET_USER_DATA, SET_USERS
} from "../redux/vars";

export type AuthUserDataType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}
export type AuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: AuthUserDataType
}

export type DialogType = {
    id: number
    name: string
    messageCount: number
}
export type DialogActionType = {
    type: typeof SET_DIALOGS,
    dialogs: Array<DialogType>
}
export type MessagesType = {
    id: number
    message: string
}
export type MessagesActionType = {
    type: typeof SET_MESSAGES,
    messages: Array<MessagesType>
}

export type ToggleFetchingActionType = {
    type: typeof FETCHING_TOGGLE
    fetching: boolean
}
export type AuthIdActionType = {
    type: typeof SET_AUTH_ID
    authId: number
}

export type ProfileActionType = {
    type: typeof SET_PROFILE,
    profile: ProfileType
}
export type StatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export type MenuType = {
    id: number
    name: string
    link: string
}
export type MenuActionType = {
    type: typeof SET_MENU,
    menu: Array<MenuType>
}

export type UsersActionsType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type TotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export type CurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type FollowingUserType = {
    type: typeof SET_FOLLOWING_USER
    userId: number
}
export type UnfollowingUserType = {
    type: typeof SET_UNFOLLOWING_USER
    userId: number
}



export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captcha?: string | null
}

export type DialogsStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

export type GeneralStateType ={
    fetching: boolean,
    authId: number | null
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}
export type ProfileStateType = {
    profile: ProfileType | null
    status: string
}

export type SidebarStateType = {
    menu: Array<MenuType>
}

export type PhotoType = {
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
export type UserStateType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
}
