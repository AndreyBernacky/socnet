import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6f94c0b1-dc2c-41e7-aba5-2c71a88b7c8b"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    unfollow(id:number) {
        return instance.delete(`follow/${id}`)
    },
    follow(id:number) {
        return instance.post(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile(userProfileId:string){
        return instance.get(`profile/`+userProfileId)
            .then(response => {
                return response.data
            })
    }

}
