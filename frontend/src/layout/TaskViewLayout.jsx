import { Container, Grid } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import TaskSidebar from "../components/TaskSidebar";
function TaskViewLayout() {
  return (
    <Container fluid style={{ marginInline: 0, height: "100%" }} p={0}>
      <Grid
        style={{
          height: "100%",
          padding: "10px 10px 0 10px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        className="no-scrollbar"
      >
        {/* Sidebar - Task Sidebar on the right */}
        <Grid.Col span={{ base: 12, md: 3, lg: 3 }} style={{ padding: "0" }}>
          <TaskSidebar />
        </Grid.Col>

        {/* Main Content (Tasks) */}
        <Grid.Col
          style={{
            maxHeight: "calc(100vh - 56px)",
            padding: "0",
            width: "100%",
            overflowY: "hidden",
          }}
          span={{ base: 12, md: 9, lg: 9 }}
        >
          <Outlet />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default TaskViewLayout;
