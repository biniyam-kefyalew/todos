import { Alert, Container, Button, Notification, Stack } from "@mantine/core";
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import useTaskStore from "../store/useTaskStore";

function CompletedTasks() {
  const { tasks, notification, status, cancelNotification } = useTaskStore();
  const completedTasks = tasks.filter((task) => task.completed === true);
  // const { notification, status } = useSelector((state) => state.todos);

  // const tasks = useSelector((state) => state.todos.tasks).filter(
  //   (task) => task.completed === true
  // );
  return (
    <div style={{ padding: "10px" }}>
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
        ) : completedTasks.length === 0 ? (
          <Alert
            mt="lg"
            title="No Completed Tasks Found"
            color="gray"
            variant="outline"
            radius="md"
          >
            You don’t have any completed tasks yet. Once you start marking tasks
            as done, they'll appear here!
          </Alert>
        ) : (
          completedTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </Stack>
    </div>
  );
}

export default CompletedTasks;
