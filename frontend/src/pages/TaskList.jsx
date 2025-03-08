import React from "react";
import {
  Button,
  Stack,
  Group,
  Container,
  Box,
  Notification,
  Alert,
} from "@mantine/core";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import useTaskStore from "../store/useTaskStore";
import TaskToolbar from "../components/TaskToolbar";

function TaskList() {
  const { tasks, status, notification, cancelNotification } = useTaskStore();
  // const dispatch = useDispatch();
  // const { tasks, notification, status } = useSelector((state) => state.todos);
  console.log(tasks);

  return (
    <div style={{ padding: "10px" }}>
      <Stack spacing="lg">
        {notification.message && (
          <Notification
            onClose={cancelNotification}
            color={notification.color}
            title={notification.title}
          >
            {notification.message}
          </Notification>
        )}
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
    </div>
  );
}

export default TaskList;
