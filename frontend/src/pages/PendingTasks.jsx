import { Alert, Container, Button, Notification, Stack } from "@mantine/core";
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import useTaskStore from "../store/useTaskStore";
function PendingTasks() {
  // const dispatch =useDispatch();
  // const { notification, status } = useSelector((state) => state.todos);

  // const tasks = useSelector((state) => state.todos.tasks).filter(
  //   (task) => task.completed === false
  // );
  const { tasks, status, notification, cancelNotification } = useTaskStore();
  const pendingTasks = tasks.filter((task) => task.completed === false);
  return (
    <Container>
      {notification.message && (
        <Notification
          color={notification.color}
          title={notification.title}
          onClose={cancelNotification}
          // onClose={()=>dispatchEvent(cancelNotification())}
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
          <Alert title="Error" mt="lg" color="red" variant="light" radius="md">
            Something went wrong. Please try again later.
          </Alert>
        ) : pendingTasks.length === 0 ? (
          <Alert
            title="No Pending Tasks Found"
            color="gray"
            mt="lg"
            variant="outline"
            radius="md"
          >
            You don’t have any pending tasks yet. Stay organized and add some
            tasks to get started!
          </Alert>
        ) : (
          pendingTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </Stack>
    </Container>
  );
}

export default PendingTasks;
