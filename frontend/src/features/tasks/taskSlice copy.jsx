import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  notification: {
    title: "",
    message: "",
    color: "",
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.notification.title = "Task Added!";
      state.notification.message = "Your task has been added successfully.";
      state.notification.color = "blue";
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.notification.title = "Task Deleted!";
      state.notification.message = "Your task has been deleted successfully.";
      state.notification.color = "red";
    },
    taskCompletion: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
        return task;
      });

      state.notification.title = "Task Completed!";
      state.notification.message = "Your task has been completed successfully.";
      state.notification.color = "green";
    },
  },
});

export const { addTask, deleteTask, taskCompletion } = todoSlice.actions;
export default todoSlice.reducer;
