import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

export default function AppLayout() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <Navbar />
      <header className="p-[1vh_4vw]">Hello</header>
      <Box className="px-[4vw]">
        <Outlet />
      </Box>
    </main>
  );
}
