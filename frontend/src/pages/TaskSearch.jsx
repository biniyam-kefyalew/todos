import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Group,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";

function TaskSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const { tasks, status, proccessing, finished, sortBy } = useTaskStore();

  useEffect(() => {
    proccessing();
    const result = searchQuery
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : tasks;
    setFilteredTasks(result);
    finished();
  }, [searchQuery, tasks]);

  return (
    <Container fluid style={{ marginInline: 0 }} p="10px">
      <Group position="apart" style={{ gap: "8px", alignItems: "center" }}>
        <Box style={{ flex: 1 }}>
          <TextInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks by title"
            size="md"
          />
        </Box>
        <Box>
          <Select
            placeholder="Sort"
            radius="sm"
            size="md"
            onChange={(value) => sortBy(value)}
            data={[
              { value: "due_date", label: "Due Date" },
              { value: "priority", label: "Priority" },
              { value: "title", label: "Title" },
              { value: "created_at", label: "Created Date" },
            ]}
            style={{ width: "150px", minWidth: "100px" }}
          />
        </Box>
      </Group>

      <Stack spacing="xs" mt="10px" style={{ gap: "4px" }}>
        {status === "loading" ? (
          <Button
            loading
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
            title="No Tasks Found"
            color="gray"
            variant="outline"
            radius="md"
          >
            You don’t have any tasks yet. Start by adding one!
          </Alert>
        ) : (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </Stack>
    </Container>
  );
}

export default TaskSearch;
