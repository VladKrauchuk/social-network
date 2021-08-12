import {authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

type InitialStateTypes = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateTypes => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDateActionPayloadTypes = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}
type SetAuthUserDateActionTypes = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDateActionPayloadTypes
}
export const setAuthUserDate = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDateActionTypes => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

type GetCaptchaUrlSuccessActionTypes = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionTypes => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
});

export const getAuthUserDate = () => async (dispatch: any) => {
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodeEnum.SUCCESS) {
        const {id, email, login} = meData.data;
        dispatch(setAuthUserDate(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === ResultCodeEnum.SUCCESS) {
        dispatch(getAuthUserDate());
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CAPTCHA_IS_REQUIRED) {
            dispatch(getCaptchaUrl());
        }

        const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));

    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDate(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer
