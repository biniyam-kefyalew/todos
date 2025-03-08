import React from "react";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import TaskList from "./pages/TaskList"; // Assuming TaskList component exists
import TaskDetail from "./pages/TaskDetail"; // Assuming TaskDetail component exists
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskAdd from "./components/TaskAdd";
import TaskSearch from "./pages/TaskSearch";
import TaskViewLayout from "./layout/TaskViewLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TaskViewLayout />,
        children: [
          {
            index: true,
            element: <TaskList />,
          },
          {
            path: "task/:taskId",
            element: <TaskDetail />,
          },
          {
            path: "completed",
            element: <CompletedTasks />,
          },
          {
            path: "pending",
            element: <PendingTasks />,
          },
        ],
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
