import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./features/posts/postsClice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
