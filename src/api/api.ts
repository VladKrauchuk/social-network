import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ae3346f4-806d-4967-bdc9-c02d198e3ef3",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please profileApi");
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`);
    }
}

export enum ResultCodeEnum {
    SUCCESS = 0,
    ERROR = 1,
}

export enum ResultCodeForCaptchaEnum {
    CAPTCHA_IS_REQUIRED = 10,
}


type MeRequestType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {
        id: number,
        email: string,
        login: string
    }
}

type LoginRequestType = {
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
    data: {
        userId: number
    }
}

export const authAPI = {
    me() {
        return instance.get<MeRequestType>(`auth/me`).then((response) => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LoginRequestType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
