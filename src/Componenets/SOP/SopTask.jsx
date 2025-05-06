import React from 'react'
import {
    Table, TableHead, TableRow, TableCell, TableBody,
    Paper, Button, Box, Typography
  } from "@mui/material";
  import { green, orange } from "@mui/material/colors";

  


const tasks = [
    {
      id: 1, taskName: "Flood", description: "Unknown", initiatedBy: "User",
      duration: "1:30:00", status: "Completed", mode: "Manual",
      date: "6/05/2025", time: "14:03:27", action: "Get Data"
    },
    {
      id: 2, taskName: "Flood", description: "Unknown", initiatedBy: "System",
      duration: "1:30:00", status: "Pending", mode: "Manual",
      date: "6/05/2025", time: "14:03:27", action: "Dispatch"
    },
    {
      id: 3, taskName: "Flood", description: "Unknown", initiatedBy: "User",
      duration: "1:30:00", status: "Completed", mode: "Automatic",
      date: "6/05/2025", time: "14:03:27", action: "Create Log"
    }
  ];
function SopTask() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 3, backgroundColor: "#0a1929" }}>
    <Typography variant="h6" color="white" mb={2}>Task</Typography>
    <Table>
      <TableHead>
        <TableRow>
          {["Task Name", "Description", "Initiated By", "Duration", "Status", "Mode", "Date & Time", "Actions"].map(header => (
            <TableCell key={header} sx={{ color: "white" }}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map(task => (
          <TableRow key={task.id}>
            <TableCell sx={{ color: "white" }}>{task.taskName}</TableCell>
            <TableCell sx={{ color: "white" }}>{task.description}</TableCell>
            <TableCell sx={{ color: "white" }}>{task.initiatedBy}</TableCell>
            <TableCell sx={{ color: "white" }}>{task.duration}</TableCell>
            <TableCell sx={{ color: task.status === "Completed" ? green[400] : orange[400] }}>
              {task.status}
            </TableCell>
            <TableCell sx={{ color: "white" }}>{task.mode}</TableCell>
            <TableCell sx={{ color: "white" }}>{task.date} {task.time}</TableCell>
            <TableCell>
              <Button size="small" variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                {task.action}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  );
}

export default SopTask