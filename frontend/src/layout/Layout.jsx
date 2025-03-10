import { Container } from "@mantine/core";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {  fetchTasks } from "../features/tasks/taskSlice";
import useTaskStore from "../store/useTaskStore";
import TaskNavBar from "../components/TaskNavBar";
import { Notification } from "@mantine/core";
function Layout() {
  const { fetchTasks, notification, cancelNotification } = useTaskStore();
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(fetchTasks());
  //  }, [dispatch]);
  return (
    <Container
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        overflowY: "hidden",
        height: "100vh",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {notification.message && (
        <Notification
          style={{ position: "fixed", top: "56px", left: "0", zIndex: 9999 }}
          onClose={cancelNotification}
          color={notification.color}
          title={notification.title}
        >
          {notification.message}
        </Notification>
      )}
      <TaskNavBar />
      <Container
        fluid
        style={{
          marginInline: 0,
          flexGrow: 1,
          width: "100%",
          padding: "0",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Container>
    </Container>
  );
}

export default Layout;
