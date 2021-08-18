import axios from "axios"
import { UserType } from "../types/types"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ae3346f4-806d-4967-bdc9-c02d198e3ef3",
    },
})

export enum ResultCodeEnum {
    SUCCESS = 0,
    ERROR = 1,
}

export enum ResultCodeForCaptchaEnum {
    CAPTCHA_IS_REQUIRED = 10,
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    resultCode: RC
    messages: Array<string>
    data: D
}
