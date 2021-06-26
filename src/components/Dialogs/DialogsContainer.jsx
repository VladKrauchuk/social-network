import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";

const DialogsContainer = (props) => (
    <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => store.dispatch(addMessageActionCreator());

                let onMessageChange = (text) => store.dispatch(updateNewMessageTextActionCreator(text));

                return (
                    <Dialogs updateNewMessageText={onMessageChange}
                             addMessage={addMessage}
                             dialogs={state.dialogs}
                             messages={state.messages}
                             newMessageText={state.newMessageText}/>
                )
            }
        }
    </StoreContext.Consumer>
)

export default DialogsContainer;
