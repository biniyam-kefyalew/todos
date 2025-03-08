import {
  Card,
  Text,
  Badge,
  Group,
  Container,
  Alert,
  Button,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";

function TaskDetail() {
  const { taskId } = useParams();
  const { tasks, status } = useTaskStore();
  console.log(taskId);
  const task = tasks.find((t) => t.id === String(taskId));

  // Filter related tasks based on the current task's category
  const relatedTasks = tasks.filter(
    (t) => t.category === task?.category && t.id !== task?.id
  );

  // Format due date
  const formattedDueDate = task?.due_date
    ? new Date(task.due_date).toLocaleDateString()
    : null;

  if (status === "loading") {
    return (
      <Container spacing="xs" style={{ gap: "4px" }}>
        <Button
          loading
          fullWidth
          mt="10px"
          loaderProps={{ type: "dots" }}
          variant="light"
          size="lg"
        />
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <Container spacing="xs" style={{ gap: "4px" }}>
        <Alert title="Error" color="red" variant="light" radius="md">
          Something went wrong. Please try again later.
        </Alert>
      </Container>
    );
  }

  if (!task) {
    return (
      <Container spacing="xs" style={{ gap: "4px" }}>
        <Alert
          title="No Tasks Found"
          color="gray"
          variant="outline"
          radius="md"
        >
          Task detail not found
        </Alert>
      </Container>
    );
  }

  return (
    <Container spacing="xs" style={{ gap: "4px" }}>
      <Card shadow="sm" p="md" mt="lg">
        <Text weight={700} size="lg">
          {task.name}
        </Text>

        <Group>
          <Text color={task.completed ? "green" : "red"} mt="5px">
            Status: {task.completed ? "Completed" : "Pending"}
          </Text>
          <Badge
            color={
              task.priority === "High"
                ? "red"
                : task.priority === "Medium"
                ? "yellow"
                : "green"
            }
            mt="5px"
          >
            {task.priority} Priority
          </Badge>
        </Group>

        <Text mt="10px" color="black">
          <strong>Description:</strong> {task.description}
        </Text>
        <Text mt="5px" color="black">
          <strong>Category:</strong> {task.category}
        </Text>
        <Text mt="5px" color="black">
          <strong>Due Date:</strong> {formattedDueDate}
        </Text>
      </Card>

      {/* Related Tasks Section */}
      {relatedTasks.length > 0 && (
        <div>
          <Text weight={600} size="lg" mt="20px">
            Related Tasks
          </Text>
          <Container
            mt="10px"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {relatedTasks.map((relatedTask) => (
              <TaskCard key={relatedTask.id} task={relatedTask} />
            ))}
          </Container>
        </div>
      )}
    </Container>
  );
}

export default TaskDetail;
