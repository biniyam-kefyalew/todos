import React, { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Text,
  Container,
  TextInput,
  Notification,
  Alert,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
// import { addTask, cancelNotification } from "../features/tasks/taskSlice";
import TaskCard from "../components/TaskCard";
import useTaskStore from "../store/useTaskStore";

function TaskList() {
  const { tasks, status, notification, addTask, cancelNotification } =
    useTaskStore();
  // const dispatch = useDispatch();
  // const { tasks, notification, status } = useSelector((state) => state.todos);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function reset() {
    setNewTaskDescription("");
    setNewTaskTitle("");
  }
  function handleAddTask() {
    if (newTaskDescription && newTaskTitle) {
      const newTaskObj = {
        description: newTaskDescription,
        title: newTaskTitle,
        completed: false,
      };
      // dispatch(addTask(newTaskObj));
      addTask(newTaskObj);
      reset();
      setTimeout(() => {
        // dispatch(cancelNotification());
        cancelNotification();
      }, 3000);
    }
  }
  console.log(tasks);

  return (
    <Container>
      <Stack spacing="lg" mt="lg">
        {notification.message && (
          <Notification
            // onClose={() => dispatch(cancelNotification())}
            onClose={cancelNotification}
            color={notification.color}
            title={notification.title}
          >
            {notification.message}
          </Notification>
        )}

        <TextInput
          placeholder="Enter your task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          label="Task title"
          required
          mb="10px"
        />
        <TextInput
          placeholder="Enter your task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          label="Task description"
          required
        />
        <Button onClick={handleAddTask} my="10px">
          Add Task
        </Button>
        <Stack spacing="xs" style={{ gap: "4px" }}>
          {status === "loading" ? (
            <Button
              loading
              mt="10px"
              loaderProps={{ type: "dots" }}
              variant="light"
              size="lg"
            />
          ) : status === "failed" ? (
            <Alert title="Error" color="red" variant="light" radius="md">
              Something went wrong. Please try again later.
            </Alert>
          ) : tasks.length === 0 ? (
            <Alert
              title="No Tasks Found"
              color="gray"
              variant="outline"
              radius="md"
            >
              You don’t have any tasks yet. Start by adding one!
            </Alert>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

export default TaskList;
