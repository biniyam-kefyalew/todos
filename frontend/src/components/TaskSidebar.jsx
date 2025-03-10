import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Card,
  Text,
  Title,
  ScrollArea,
  Divider,
  Stack,
  Group,
  Box,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import useTaskStore from "../store/useTaskStore";
import { useMediaQuery } from "@mantine/hooks";

function TaskSidebar() {
  const { tasks } = useTaskStore();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm:ss A"));
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const urgentTasks = tasks.filter((task) =>
    dayjs(task.due_date).isSame(dayjs(), "day")
  );

  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const tasksForDate = tasks.filter(
        (task) =>
          dayjs(task.due_date).format("YYYY-MM-DD") ===
          dayjs(date).format("YYYY-MM-DD")
      );

      if (tasksForDate.length > 0) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(`/app/tasks?date=${dayjs(date).format("YYYY-MM-DD")}`)
            }
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {tasksForDate.slice(0, 3).map((task, index) => (
                <span key={index} style={{ color: "blue", fontSize: "18px" }}>
                  •
                </span>
              ))}
            </div>
            {tasksForDate.length > 3 && (
              <span style={{ fontSize: "10px", color: "gray" }}>
                +{tasksForDate.length - 3} more
              </span>
            )}
          </div>
        );
      }
    }
    return null;
  };
  const isMobile = useMediaQuery("(max-width: 600px)");
  const cardStyle = {
    height: isMobile ? "auto" : "calc(100vh - 56px)",
    padding: "10px",
    width: "100%",
    overflowY: "auto",
  };
  return (
    <Card
      className="no-scrollbar"
      style={cardStyle}
      shadow="xs"
      m={0}
      radius="none"
    >
      {/* Current Date & Time */}
      <Title order={4} mb={"10px"}>
        📅 {dayjs().format("dddd, MMM D, YYYY")}
      </Title>
      <Text size="sm" color="blue">
        🕒 {currentTime}
      </Text>
      <Divider my="sm" color="blue" />

      {/* Modern Calendar */}
      <Title order={5} mb={"10px"}>
        🗓 Task Calendar
      </Title>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={getTileContent}
        className="custom-calendar"
      />
      <Divider my="sm" color="blue" />

      {/* Urgent Tasks */}
      <Title order={5} mb={"10px"}>
        ⚠️ Upcoming Deadlines
      </Title>

      {urgentTasks.length > 0 ? (
        urgentTasks.map((task) => (
          <Link
            key={task.id}
            to={`/app/task/${task.id}`}
            style={{ textDecoration: "none" }} // Remove underline from links
          >
            <Card
              shadow="sm"
              bg="blue.2"
              p="4px 10px"
              my={"4px"}
              sx={(theme) => ({
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: theme.shadows.md,
                },
              })}
            >
              <Text
                weight={500}
                size="sm"
                style={{ textTransform: "capitalize", color: "black" }}
              >
                {task.title}
              </Text>
              <Text size="xs" color="red">
                Due: {dayjs(task.due_date).format("MMM D, YYYY")}
              </Text>
            </Card>
          </Link>
        ))
      ) : (
        <Text
          size="sm"
          color="blue"
          align="center"
          sx={{
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          No urgent tasks 🎉
        </Text>
      )}
    </Card>
  );
}

export default TaskSidebar;
