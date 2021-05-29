import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "23ab8b18-87cd-45c7-ba46-0b20b5014a46"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId){
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId){
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe = false, captcha = false){
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    }
    ,
    logout(){
        return instance.delete(`/auth/login`)
    }
}
