import {
  Box,
  Button,
  Notification,
  TextInput,
  Select,
  Container,
} from "@mantine/core";
import React, { useState } from "react";
import useTaskStore from "../store/useTaskStore";

function TaskAdd() {
  const { addTask, notification, notify, cancelNotification } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(""); // Priority state
  const [dueDate, setDueDate] = useState(""); // Due date state
  const [taskCategory, setTaskCategory] = useState(""); // Category state

  function reset() {
    setNewTaskTitle("");
    setNewTaskDescription("");
    setTaskPriority("");
    setDueDate("");
    setTaskCategory("");
  }

  function handleAddTask() {
    if (
      newTaskTitle &&
      newTaskDescription &&
      taskPriority &&
      dueDate &&
      new Date(dueDate) >= new Date() && // Convert dueDate to Date object
      taskCategory
    ) {
      const newTaskObj = {
        title: newTaskTitle,
        description: newTaskDescription,
        priority: taskPriority,
        due_date: dueDate,
        category: taskCategory,
        completed: false,
      };
      addTask(newTaskObj);
      reset();
    } else {
      notify(
        {
          title: "Invalid Input",
          message:
            "Make sure you have filled all fields, and the due date is not in the past.",
          color: "red",
        },
        true
      );
    }
  }

  return (
    <Container fluid style={{ marginInline: 0 }} p={"10px"}>
      {notification.message && (
        <Notification
          color={notification.color}
          title={notification.title}
          onClose={cancelNotification}
          // onClose={()=>dispatch(cancelNotification())}
        >
          {notification.message}
        </Notification>
      )}
      <TextInput
        placeholder="Enter your task title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        label="Task Title"
        required
        mb="10px"
      />
      <TextInput
        placeholder="Enter your task description"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        label="Task Description"
        required
      />
      <Select
        label="Task Priority"
        placeholder="Select priority"
        value={taskPriority}
        onChange={setTaskPriority}
        data={["Low", "Medium", "High"]}
        required
        mb="10px"
      />
      <TextInput
        type="date"
        label="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        mb="10px"
      />
      <TextInput
        placeholder="Enter category (e.g., Work, Personal)"
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
        label="Task Category"
        required
      />
      <Button fullWidth onClick={handleAddTask} my="10px">
        Add Task
      </Button>
    </Container>
  );
}

export default TaskAdd;
