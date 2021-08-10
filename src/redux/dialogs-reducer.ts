const SEND_MESSAGE = "SEND-MESSAGE";

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

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
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

type AddMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const addMessage = (newMessageText: string): AddMessageActionType => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer
