import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
