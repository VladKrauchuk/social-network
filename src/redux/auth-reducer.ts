import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../api/api"
import {FormAction, stopSubmit} from "redux-form"
import {authAPI} from "../api/auth-api"
import {securityAPI} from "../api/security-api"
import {BaseThunkType, InferActionsTypes} from "./redux-store"

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

const authReducer = (state = initialState, action: ActionsType): InitialStateTypes => {
    switch (action.type) {
        case "SN/AUTH/SET_USER_DATA":
        case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserDate: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SN/AUTH/SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "SN/AUTH/GET_CAPTCHA_URL_SUCCESS",
        payload: {captchaUrl},
    } as const)
}

export const getAuthUserDate = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me()

    if (meData.resultCode === ResultCodeEnum.SUCCESS) {
        const {id, email, login} = meData.data
        dispatch(actions.setAuthUserDate(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)

    if (loginData.resultCode === ResultCodeEnum.SUCCESS) {
        dispatch(getAuthUserDate())
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CAPTCHA_IS_REQUIRED) {
            dispatch(getCaptchaUrl())
        }

        const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))

    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(actions.setAuthUserDate(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

type InitialStateTypes = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType| FormAction>
