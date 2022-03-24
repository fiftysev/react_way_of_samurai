import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageTextChange: (text) =>
      dispatch(updateNewMessageTextActionCreator(text)),
    sendMessage: () => dispatch(sendMessageActionCreator()),
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
