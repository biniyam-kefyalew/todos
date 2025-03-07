import { create } from "zustand";

// Define the Zustand store
const useTaskStore = create((set) => ({
  tasks: [],
  notification: {
    title: "",
    message: "",
    color: "",
  },
  status: "loading",
  error: null,

  // Fetch Tasks
  fetchTasks: async () => {
    set({ status: "loading" });
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tasks/");
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      set({ tasks: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error.message,
        notification: {
          title: "Fetch Failed",
          message: "Could not fetch tasks. Please try again.",
          color: "red",
        },
      });
    }
  },

  // Add Task
  addTask: async (newTask) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tasks/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) throw new Error("Failed to add task");
      const data = await response.json();
      set((state) => ({
        tasks: [...state.tasks, data],
        notification: {
          title: "Task Added!",
          message: "Your task has been added successfully.",
          color: "blue",
        },
      }));
    } catch (error) {
      set({
        notification: {
          title: "Add Task Failed",
          message: "Could not add the task. Please try again.",
          color: "red",
        },
      });
    }
  },

  // Delete Task
  deleteTask: async (taskId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tasks/${taskId}/delete/`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete task");
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
        notification: {
          title: "Task Deleted!",
          message: "Your task has been deleted successfully.",
          color: "orange",
        },
      }));
    } catch (error) {
      set({
        notification: {
          title: "Delete Failed",
          message: "Could not delete the task. Please try again.",
          color: "red",
        },
      });
    }
  },

  // Toggle Task Completion
  toggleTaskCompletion: async (taskId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tasks/${taskId}/complete/`,
        { method: "PATCH" }
      );
      if (!response.ok) throw new Error("Failed to update task status");
      const updatedTask = await response.json();
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
        notification: {
          title: "Task Status Changed",
          message: "Your task status has been changed successfully.",
          color: "green",
        },
      }));
    } catch (error) {
      set({
        notification: {
          title: "Update Failed",
          message: "Could not update task status. Please try again.",
          color: "red",
        },
      });
    }
  },

  // Cancel Notification
  cancelNotification: () => {
    set({
      notification: { title: "", message: "", color: "" },
    });
  },
}));

export default useTaskStore;
