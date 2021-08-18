import {getAuthUserDate} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionsType): InitialStateTypes => {
    switch (action.type) {
        case "SN/APP/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: "SN/APP/INITIALIZED_SUCCESS"} as const),
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDate())

    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer

type InitialStateTypes = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
