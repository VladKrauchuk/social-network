import {getAuthUserDate} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitialStateTypes = {
    initialized: boolean
}

let initialState: InitialStateTypes = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateTypes => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

type InitializedSuccessActionCreatorTypes = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionCreatorTypes => ({
    type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDate())

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer
