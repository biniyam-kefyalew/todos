import { Container, Grid } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import TaskSidebar from "../components/TaskSidebar";
function TaskViewLayout() {
  return (
    <Container fluid p={0} style={{ height: "100vh" }}>
      <Grid style={{ height: "100%" }}>
        {/* Sidebar - Task Sidebar on the right */}
        <Grid.Col
          span={{ base: 12, md: 3, lg: 3 }}
          style={{ padding: "10px", borderLeft: "1px solid #ddd" }}
        >
          <TaskSidebar />
        </Grid.Col>

        {/* Main Content (Tasks) */}
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }} style={{ padding: "10px" }}>
          <Outlet />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default TaskViewLayout;
