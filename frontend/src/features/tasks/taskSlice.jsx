import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  notification: {
    title: "",
    message: "",
    color: "",
  },
  status: "loading",
  error: null,
};

// Fetch Tasks
export const fetchTasks = createAsyncThunk("todos/fetchTasks", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/tasks/");
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
});

// Add Task
export const addTask = createAsyncThunk("todos/addTask", async (newTask) => {
  const response = await fetch("http://127.0.0.1:8000/api/tasks/add/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  if (!response.ok) throw new Error("Failed to add task");
  return response.json();
});

// Delete Task
export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  async (taskId) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/tasks/${taskId}/delete/`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete task");
    return taskId;
  }
);

// Toggle Task Completion
export const toggleTaskCompletion = createAsyncThunk(
  "todos/toggleTaskCompletion",
  async (taskId) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/tasks/${taskId}/complete/`,
      {
        method: "PATCH",
      }
    );
    if (!response.ok) throw new Error("Failed to update task");
    return response.json();
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    cancelNotification: (state) => {
      state.notification = { title: "", message: "", color: "" };
    },
  },
  extraReducers: (builder) => {
    // Fetch Tasks
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.notification = {
        title: "Fetch Failed",
        message: "Could not fetch tasks. Please try again.",
        color: "orange",
      };
    });

    // Add Task
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
      state.notification = {
        title: "Task Added!",
        message: "Your task has been added successfully.",
        color: "blue",
      };
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.notification = {
        title: "Task Addition Failed",
        message: "Could not add the task. Please try again.",
        color: "orange",
      };
    });

    // Delete Task
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.notification = {
        title: "Task Deleted!",
        message: "Your task has been deleted successfully.",
        color: "red",
      };
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.notification = {
        title: "Delete Failed",
        message: "Could not delete the task. Please try again.",
        color: "orange",
      };
    });

    // Toggle Task Completion
    builder.addCase(toggleTaskCompletion.fulfilled, (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.notification = {
        title: "Task Status Changed",
        message: "Your task status has been changed successfully.",
        color: "green",
      };
    });
    builder.addCase(toggleTaskCompletion.rejected, (state, action) => {
      state.notification = {
        title: "Status Update Failed",
        message: "Could not update task status. Please try again.",
        color: "orange",
      };
    });
  },
});

export const { cancelNotification } = todoSlice.actions;
export default todoSlice.reducer;
