import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
  const onMessageTextChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const state = props.store.getState().dialogsPage;

  return (
    <Dialog
      onMessageTextChange={onMessageTextChange}
      sendMessage={sendMessage}
      messages={state.messages}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogContainer;
