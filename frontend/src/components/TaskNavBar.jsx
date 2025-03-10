import React from "react";
import { Container, Group, Text, Burger, Drawer, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function TaskNavBar() {
  const [opened, setOpened] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container
      bg={"blue.3"}
      style={{ marginInline: 0, maxWidth: "100%", padding: "10px" }}
    >
      <Group position="apart">
        <Text size="xl" weight={700}>
          Task Manager
        </Text>

        {/* Desktop navigation */}
        {!isMobile && (
          <Group style={{ marginLeft: "auto", gap: "8px" }}>
            <Link to="/app/all-tasks" style={{ textDecoration: "none" }}>
              <Text color="black">All Tasks</Text>
            </Link>
            <Link to="/app/today-tasks" style={{ textDecoration: "none" }}>
              <Text color="black">Today's Tasks</Text>
            </Link>
            <Link to="/app/completed-tasks" style={{ textDecoration: "none" }}>
              <Text color="black">Completed Tasks</Text>
            </Link>
            <Link to="/app/pending-tasks" style={{ textDecoration: "none" }}>
              <Text color="black">Pending Tasks</Text>
            </Link>
            <Link to="/app/overdued-tasks" style={{ textDecoration: "none" }}>
              <Text color="black">Overdue Tasks</Text>
            </Link>
          </Group>
        )}

        {/* Mobile navigation */}
        {isMobile && (
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color="black"
            ml={"auto"}
          />
        )}
      </Group>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Task Manager"
        padding="md"
        position="top" // Opens from the top
        styles={{
          content: { backgroundColor: "#90caf9" },
        }}
      >
        <Stack spacing="sm">
          <Link
            onClick={() => setOpened(false)}
            to="/app/all-tasks"
            style={{ textDecoration: "none" }}
          >
            <Text color="black">All Tasks</Text>
          </Link>
          <Link
            onClick={() => setOpened(false)}
            to="/app/today-tasks"
            style={{ textDecoration: "none" }}
          >
            <Text color="black">Today's Tasks</Text>
          </Link>
          <Link
            onClick={() => setOpened(false)}
            to="/app/completed-tasks"
            style={{ textDecoration: "none" }}
          >
            <Text color="black">Completed Tasks</Text>
          </Link>
          <Link
            onClick={() => setOpened(false)}
            to="/app/pending-tasks"
            style={{ textDecoration: "none" }}
          >
            <Text color="black">Pending Tasks</Text>
          </Link>
          <Link
            onClick={() => setOpened(false)}
            to="/app/overdue-tasks"
            style={{ textDecoration: "none" }}
          >
            <Text color="black">Overdue Tasks</Text>
          </Link>
        </Stack>
      </Drawer>
    </Container>
  );
}

export default TaskNavBar;
