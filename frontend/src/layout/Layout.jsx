import { Container } from "@mantine/core";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {  fetchTasks } from "../features/tasks/taskSlice";
import useTaskStore from "../store/useTaskStore";

function Layout() {
  const { fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  // const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(fetchTasks());
  //  }, [dispatch]);
  return (
    <Container p="0">
      <NavBar />
      <Outlet />
    </Container>
  );
}

export default Layout;
