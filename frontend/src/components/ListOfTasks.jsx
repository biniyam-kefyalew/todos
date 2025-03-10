import React, { useEffect, useState } from "react";
import { Container, Stack, Button, Alert, Group } from "@mantine/core";
import TaskCard from "../components/TaskCard";
import TaskHeader from "./TaskHeader";
import { useMediaQuery } from "@mantine/hooks";
import dayjs from "dayjs";
import useTaskStore from "../store/useTaskStore";

function ListOfTasks({ selectedDate, field }) {
  const { tasks } = useTaskStore();
  const [status, setStatus] = useState("loading"); // Adding status state
  const [filteredTasks, setFilteredTasks] = useState([]);

  let title = "";
  let noTasksMessage = "";

  useEffect(() => {
    const filterTasks = () => {
      let tasksToDisplay = [];
      if (selectedDate) {
        tasksToDisplay = tasks.filter((task) =>
          dayjs(task.due_date).isSame(dayjs(selectedDate), "day")
        );
        title = `Tasks for ${dayjs(selectedDate).format("MMMM D, YYYY")}`;
        noTasksMessage = "No tasks scheduled for this day.";
      } else if (field === "all") {
        title = "Tasks";
        noTasksMessage = "You don’t have any tasks yet. Start by adding one!";
        tasksToDisplay = tasks;
      } else if (field === "today") {
        title = "Today's Tasks";
        noTasksMessage =
          "You don’t have any tasks for today. Enjoy your free time!";
        tasksToDisplay = tasks.filter((task) =>
          dayjs(task.due_date).isSame(dayjs(), "day")
        );
      } else if (field === "completed") {
        title = "Completed Tasks";
        noTasksMessage =
          "You don’t have any completed tasks yet. Once you start marking tasks as done, they'll appear here!";
        tasksToDisplay = tasks.filter((task) => task.completed === true);
      } else if (field === "pending") {
        title = "Pending Tasks";
        noTasksMessage =
          "You don’t have any pending tasks yet. Stay organized and add some tasks to get started!";
        tasksToDisplay = tasks.filter((task) => !task.completed);
      } else if (field === "overdue") {
        title = "Overdue Tasks";
        noTasksMessage =
          "You don’t have any Overdue tasks yet. Stay organized and add some tasks to get started!";
        tasksToDisplay = tasks.filter((task) =>
          dayjs(task.due_date).isBefore(dayjs(), "day")
        );
      }
      setFilteredTasks(tasksToDisplay);
      setStatus("success");
    };

    if (tasks.length === 0) {
      setStatus("failed");
    } else {
      filterTasks();
    }
  }, [selectedDate, field, tasks]);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const stackStyle = {
    height: isMobile ? "auto" : "calc(100vh - 140px)",
    padding: "10px",
    overflowY: "auto",
    overflowX: "hidden",
    gap: "4px",
  };

  return (
    <Container fluid style={{ marginInline: 0, height: "100%", padding: 0 }}>
      <Group w={"100%"} p={0} gap={0}>
        <TaskHeader title={title} />
        <Stack
          spacing="xs"
          w={"100%"}
          style={stackStyle}
          className="no-scrollbar"
        >
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
          ) : filteredTasks.length === 0 ? (
            <Alert
              title={`No ${title} Found`}
              color="gray"
              variant="outline"
              radius="md"
            >
              {noTasksMessage}
            </Alert>
          ) : (
            filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </Stack>
      </Group>
    </Container>
  );
}

export default ListOfTasks;
