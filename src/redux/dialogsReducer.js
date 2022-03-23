export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (state.newMessageText.trim() !== "") {
        state.messages.push({
          message: state.newMessageText,
          alignRight: true,
        });
        state.newMessageText = "";
      }
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
