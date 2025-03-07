import { Button, Card, Checkbox, Group, Text } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  cancelNotification,
  deleteTask,
  toggleTaskCompletion,
} from "../features/tasks/taskSlice";
import { useMediaQuery } from "@mantine/hooks";
import useTaskStore from "../store/useTaskStore";

function TaskCard({ task }) {
  // const dispatch = useDispatch();
  const { toggleTaskCompletion, deleteTask, cancelNotification } =
    useTaskStore();
  const handleDeleteTask = (id) => {
    // dispatch(deleteTask(id));
    deleteTask(id);
    setTimeout(() => {
      // dispatch(cancelNotification());
      cancelNotification();
    }, 3000);
  };

  const toggleTaskCompletionHandler = (id) => {
    // dispatch(toggleTaskCompletion(id));
    toggleTaskCompletion(id);
    setTimeout(() => {
      // dispatch(cancelNotification());
      cancelNotification();
    }, 3000);
  };

  return (
    <Card key={task.id} shadow="sm" p="md" mt="md">
      <Group position="apart">
        <Checkbox
          label={task.title}
          checked={task.completed}
          onChange={() => toggleTaskCompletionHandler(task.id)}
        />
        <Group style={{ marginLeft: "auto" }}>
          <Link to={`/task/${task.id}`}>
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
    </Card>
  );
}

export default TaskCard;
