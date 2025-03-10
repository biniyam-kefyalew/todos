import React from "react";
import { Box, Button, Select } from "@mantine/core";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import useTaskStore from "../store/useTaskStore";

function TaskToolbar() {
  const { sortBy } = useTaskStore();

  return (
    <Box
      p="10px"
      ml={"auto"}
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Search Button */}
      <Link to="/app/search">
        <Button
          variant="light"
          leftSection={<FiSearch size={16} />}
          size="md"
          style={{ minWidth: "120px" }} // Slightly wider for large screens
        >
          Search
        </Button>
      </Link>

      {/* Sort Dropdown */}
      <Select
        placeholder="Sort by"
        radius="sm"
        size="md"
        onChange={(value) => sortBy(value)}
        data={[
          { value: "due_date", label: "Due Date" },
          { value: "priority", label: "Priority" },
          { value: "title", label: "Title" },
          { value: "created_at", label: "Created Date" },
        ]}
        style={{
          width: "150px", // Increased width for better usability on large screens
          minWidth: "100px",
        }}
      />

      {/* Add Task Button */}
      <Link to="/app/add-task">
        <Button variant="light" size="md" style={{ minWidth: "120px" }}>
          Add Task
        </Button>
      </Link>
    </Box>
  );
}

export default TaskToolbar;
