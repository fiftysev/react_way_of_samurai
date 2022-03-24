import { connect } from "react-redux";
import DialogsList from "./DialogsList";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const DialogsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsList);

export default DialogsListContainer;
