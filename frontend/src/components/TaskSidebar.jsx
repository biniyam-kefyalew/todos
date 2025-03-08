import React, { useEffect, useState } from "react";
import {
  Card,
  Text,
  Title,
  ScrollArea,
  Divider,
  Indicator,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import useTaskStore from "../store/useTaskStore";

function TaskSidebar() {
  const { tasks } = useTaskStore();
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm:ss A"));

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter tasks due today or overdue (urgent)
  const urgentTasks = tasks.filter((task) =>
    dayjs(task.due_date).isBefore(dayjs().add(1, "day"))
  );

  return (
    <Card>
      {/* Current Date & Time */}
      <Title order={4}>📅 {dayjs().format("dddd, MMM D, YYYY")}</Title>
      <Text size="sm" color="dimmed">
        🕒 {currentTime}
      </Text>

      <Divider my="sm" />

      {/* Calendar View */}
      <Title order={5}>🗓 Task Calendar</Title>
      <Calendar
        styles={{
          calendarHeaderControlIcon: { width: 16, height: 16 }, // Adjust the size
        }}
        static
      />
      <Divider my="sm" />

      {/* Urgent Tasks */}
      <Title order={5}>⚠️ Upcoming Deadlines</Title>
      <ScrollArea style={{ maxHeight: "200px" }}>
        {urgentTasks.length > 0 ? (
          urgentTasks.map((task) => (
            <Card key={task.id} shadow="xs" my="xs" padding="sm">
              <Text>{task.title}</Text>
              <Text size="xs" color="red">
                Due: {dayjs(task.due_date).format("MMM D, YYYY")}
              </Text>
            </Card>
          ))
        ) : (
          <Text size="sm" color="dimmed">
            No urgent tasks 🎉
          </Text>
        )}
      </ScrollArea>
    </Card>
  );
}

export default TaskSidebar;
