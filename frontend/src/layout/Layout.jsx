import { Container } from "@mantine/core";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {  fetchTasks } from "../features/tasks/taskSlice";
import useTaskStore from "../store/useTaskStore";
import TaskToolbar from "../components/TaskToolbar";

function Layout() {
  const { fetchTasks } = useTaskStore();
  const location = useLocation();
  useEffect(() => {
    fetchTasks();
  }, []);

  // const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(fetchTasks());
  //  }, [dispatch]);
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      {!location.pathname.includes("search") && <TaskToolbar />}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
