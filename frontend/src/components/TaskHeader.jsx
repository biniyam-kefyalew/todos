import { Group, Title, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import TaskToolbar from "./TaskToolbar"; // Ensure this is imported correctly

function TaskHeader({ title }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return isMobile ? (
    <Stack spacing="sm" my={0}>
      {" "}
      {/* Vertical layout for small screens */}
      <Title c={"black"} order={4}>
        {title}
      </Title>
      <TaskToolbar />
    </Stack>
  ) : (
    <Group position="apart" w={"100%"}>
      {" "}
      {/* Horizontal layout for larger screens */}
      <Title c={"black"} order={4}>
        {title}
      </Title>
      <TaskToolbar />
    </Group>
  );
}

export default TaskHeader;
