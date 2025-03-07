import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Container,
  Button,
  Stack,
  Text,
  TextInput,
  Notification,
  MantineProvider,
} from "@mantine/core";
import TaskDetails from "./pages/TaskDetail";
import TaskList from "./pages/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTasks((prev) => [...prev, newTaskObj]);
      setNewTask("");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <MantineProvider>
      <Router>
        <Container>
          <Stack spacing="lg" mt="lg">
            {showNotification && (
              <Notification color="teal" title="Task Added!" disallowClose>
                Your task has been added successfully.
              </Notification>
            )}
            <TextInput
              placeholder="Enter your task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              label="New Task"
              required
            />
            <Button onClick={addTask}>Add Task</Button>
            <Routes>
              <Route
                path="/"
                element={
                  <TaskList
                    tasks={tasks}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                  />
                }
              />
              <Route path="/task/:id" element={<TaskDetails tasks={tasks} />} />
            </Routes>
          </Stack>
        </Container>
      </Router>
    </MantineProvider>
  );
}

export default App;
