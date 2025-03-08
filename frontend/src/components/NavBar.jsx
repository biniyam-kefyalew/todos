import React from "react";
import { Container, Group, Text, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function NavBar() {
  const [opened, setOpened] = React.useState(false);

  const isMobile = useMediaQuery("(max-width: 360px)");

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        margin: 0,
        padding: "10px",
      }}
    >
      <Group position="apart">
        <Text size="xl" weight={700}>
          To Do List
        </Text>

        {/* Desktop navigation */}
        {!isMobile && (
          <Group style={{ marginLeft: "auto" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Text color="black">Tasks</Text>
            </Link>
            <Link to="/completed" style={{ textDecoration: "none" }}>
              <Text color="black" component="p">
                Completed
              </Text>
            </Link>
            <Link to="/pending" style={{ textDecoration: "none" }}>
              <Text color="black" component="p">
                Pending
              </Text>
            </Link>
          </Group>
        )}

        {/* Mobile navigation */}
        {isMobile && (
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            style={{ marginLeft: "auto" }}
            color="black"
          />
        )}
      </Group>

      {/* Mobile navigation links */}
      {opened && isMobile && (
        <Group mt="md" spacing="sm" style={{ background: "none", padding: 0 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text color="black" component="p">
              Tasks
            </Text>
          </Link>
          <Link to="/completed" style={{ textDecoration: "none" }}>
            <Text color="black" component="p">
              Completed
            </Text>
          </Link>
          <Link to="/pending" style={{ textDecoration: "none" }}>
            <Text color="black" component="p">
              Pending
            </Text>
          </Link>
        </Group>
      )}
    </div>
  );
}

export default NavBar;
