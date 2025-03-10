import React from "react";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import TaskList from "./pages/TaskList"; // Assuming TaskList component exists
import TaskDetail from "./pages/TaskDetail"; // Assuming TaskDetail component exists
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import TaskAdd from "./components/TaskAdd";
import TaskSearch from "./pages/TaskSearch";
import TaskViewLayout from "./layout/TaskViewLayout";
import TodayTasks from "./pages/TodayTasks";
import OverduedTasks from "./pages/OverduedTasks";
import TasksOnDate from "./pages/TasksOnDate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/app",
        element: <TaskViewLayout />,
        children: [
          {
            index: true,
            element: <TaskList />,
          },
          {
            path: "all-tasks",
            element: <TaskList />,
          },
          {
            path: "tasks",
            element: <TasksOnDate />,
          },
          {
            path: "task/:taskId",
            element: <TaskDetail />,
          },
          {
            path: "completed-tasks",
            element: <CompletedTasks />,
          },
          {
            path: "pending-tasks",
            element: <PendingTasks />,
          },
          {
            path: "overdued-tasks",
            element: <OverduedTasks />,
          },
          {
            path: "today-tasks",
            element: <TodayTasks />,
          },
          {
            path: "add-task",
            element: <TaskAdd />,
          },
          {
            path: "search",
            element: <TaskSearch />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    // <Provider store={store}>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
    // </Provider>
  );
}

export default App;
