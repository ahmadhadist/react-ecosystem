import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./todos/reducers";

export default configureStore({
  reducer: {
    todos,
  },
});
