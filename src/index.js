import { state, addPost } from "./redux/state";
import { runTreeRender } from "./render";

runTreeRender(state, { addPost });
