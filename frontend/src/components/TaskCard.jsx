import React from "react";
import { Card, Checkbox, Button, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import dayjs from "dayjs";
import useTaskStore from "../store/useTaskStore";

function TaskCard({ task }) {
  const { toggleTaskCompletion, deleteTask, cancelNotification } =
    useTaskStore();

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setTimeout(() => {
      cancelNotification();
    }, 3000);
  };

  const toggleTaskCompletionHandler = (id) => {
    toggleTaskCompletion(id);
    setTimeout(() => {
      cancelNotification();
    }, 3000);
  };

  return (
    <Group
      position="apart"
      p={"10px 6px"}
      my={"4px"}
      style={{ borderRadius: "5px" }}
    >
      {!dayjs(task.due_date).isBefore(dayjs(), "day") && (
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskCompletionHandler(task.id)}
        />
      )}
      {dayjs(task.due_date).isBefore(dayjs(), "day") && !task.completed && (
        <FiAlertCircle color="red" size={20} />
      )}
      <Text ml={"16px"} style={{ textTransform: "capitalize" }}>
        {task.title}
      </Text>
      <Group style={{ marginLeft: "auto", gap: "16px" }}>
        {!dayjs(task.due_date).isBefore(dayjs(), "day") && (
          <Link to={`/app/task/${task.id}`}>
            <Button variant="light" color="green" size="xs">
              Edit
            </Button>
          </Link>
        )}
        <Link to={`/app/task/${task.id}`}>
          <Button variant="light" color="blue" size="xs">
            View
          </Button>
        </Link>
        <Button
          variant="light"
          color="red"
          size="xs"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </Button>
      </Group>
    </Group>
  );
}

export default TaskCard;
