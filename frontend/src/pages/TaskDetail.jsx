import { Card, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import useTaskStore from "../store/useTaskStore";

function TaskDetail() {
  const taskId = window.location.pathname.split("/").pop();
  const { tasks } = useTaskStore();
  // const tasks = useSelector((state) => state.todos.tasks);
  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) {
    return <Text>No task found!</Text>;
  }

  return (
    <Card shadow="sm" p="md" mt="lg">
      <Text weight={500}>{task.title}</Text>
      <Text color="gray">
        Status: {task.completed ? "Completed" : "Pending"}
      </Text>
      <Text mt="10px" color="black">
        {task.description}
      </Text>
    </Card>
  );
}
export default TaskDetail;
