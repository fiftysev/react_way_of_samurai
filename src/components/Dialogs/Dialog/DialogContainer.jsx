import {
  sendMessage,
  updateNewMessageText,
} from "../../../redux/actions/dialogs";
import Dialog from "./Dialog";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = {
  sendMessage,
  updateNewMessageText,
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
