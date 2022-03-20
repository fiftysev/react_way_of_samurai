import { state, addPost, updateNewPostText } from "./redux/state";
import { runTreeRender } from "./render";

runTreeRender(state, { addPost, updateNewPostText });
