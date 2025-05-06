import React from "react";
// pages/Dashboard.jsx
import { Grid, Box } from "@mui/material";
import SopTask from "../SOP/SopTask"
import CommentsPanel from "../SOP/CommentsPanel";
import IncidentDetails from "../SOP/IncidentDetails";

function Dashboard(darkMode, setDarkMode) {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#0a1929", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <SopTask />
        </Grid>
        <Grid item xs={12} md={4}>
          <CommentsPanel />
        </Grid>
        <Grid item xs={12}>
          <IncidentDetails />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
