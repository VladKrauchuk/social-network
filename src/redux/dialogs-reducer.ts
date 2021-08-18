import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Valera'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
    ] as Array<MessageType>,
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND_MESSAGE":
            let newMessage = {
                id: 5,
                message: action.newMessageText,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const actions = {
    addMessage: (newMessageText: string) => ({type: "SN/DIALOGS/SEND_MESSAGE", newMessageText} as const),
}

export default dialogsReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
