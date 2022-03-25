export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Egor",
    },
    {
      id: 2,
      name: "Zhenya",
    },
    {
      id: 3,
      name: "Сэмчик",
    },
  ],
  messages: [
    {
      message: "Test",
      alignRight: true,
    },
    {
      message: "Test",
      alignRight: true,
    },
    {
      message: "Test",
    },
    {
      message: "Test",
      alignRight: true,
    },
    {
      message: "Test",
    },
    {
      message: "Test",
      alignRight: true,
    },
    {
      message: "Test",
    },
    {
      message: "Test",
    },
    {
      message: "Test",
    },
    {
      message: "Test",
    },
    {
      message: "Test",
      alignRight: true,
    },
    {
      message: "Test",
      alignRight: true,
    },
  ],
  newMessageText: "Test",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { message: state.newMessageText, alignRight: true },
        ],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };
    default:
      return state;
  }
};

export default dialogsReducer;
