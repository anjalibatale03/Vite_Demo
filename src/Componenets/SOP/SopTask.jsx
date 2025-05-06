import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Grid,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import { Search, Visibility, AddCircleOutline } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const EnquiryCard = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#5FECC8",
  borderRadius: "8px 10px 0 0",
  padding: "6px 12px",
  color: "black",
}));

const EnquiryCardBody = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.mode === "dark" ? "#112240" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  marginTop: "0.5em",
  borderRadius: "8px",
  padding: "10px 12px",
  borderBottom: `1px solid ${theme.palette.mode === "dark" ? "#334" : "#ccc"}`,
}));

const StyledCardContent = styled(Box)({
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
});

const tasks = [
  {
    id: 1,
    taskName: "Flood",
    description: "Unknown",
    initiatedBy: "User",
    duration: "1:30:00",
    status: "Completed",
    mode: "Manual",
    date: "6/05/2025",
    time: "14:03:27",
    action: "Get Data",
  },
  {
    id: 2,
    taskName: "Flood",
    description: "Unknown",
    initiatedBy: "System",
    duration: "1:30:00",
    status: "Pending",
    mode: "Manual",
    date: "6/05/2025",
    time: "14:03:27",
    action: "Dispatch",
  },
  {
    id: 3,
    taskName: "Flood",
    description: "Unknown",
    initiatedBy: "User",
    duration: "1:30:00",
    status: "Completed",
    mode: "Automatic",
    date: "6/05/2025",
    time: "14:03:27",
    action: "Create Log",
  },
];

function SopTask({ darkMode }) {
  const textColor = darkMode ? "#ffffff" : "#000000";
  const bgColor = darkMode ? "#0a1929" : "#ffffff";

  return (
    <>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Typography variant="h6" sx={{ color: textColor }}>
          <strong>Task</strong>
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Your Location"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: darkMode ? "#1e293b" : "#fff",
              color: darkMode ? "#fff" : "#000",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: darkMode ? "#444" : "#ccc",
            },
            "& input": {
              color: darkMode ? "#fff" : "#000",
            },
          }}
        />
      </Box>

      <Paper elevation={3} sx={{ padding: 2, borderRadius: 3, backgroundColor: bgColor }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableBody>
                  {/* Header */}
                  <EnquiryCard>
                    {[
                      "Task Name",
                      "Description",
                      "Initiated By",
                      "Duration",
                      "Date & Time",
                      "Status",
                      "Mode",
                      "Actions",
                      "Comments",
                      "View",
                    ].map((label, idx) => (
                      <StyledCardContent key={idx} style={{ flex: 1 }}>
                        <Typography variant="subtitle2">{label}</Typography>
                      </StyledCardContent>
                    ))}
                  </EnquiryCard>

                  {/* Rows */}
                  {tasks.length === 0 ? (
                    <Box p={2}>
                      <Typography align="center" color="textSecondary">
                        No tasks available.
                      </Typography>
                    </Box>
                  ) : (
                    tasks.map((item) => (
                      <EnquiryCardBody key={item.id}>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.taskName}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.description}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.initiatedBy}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.duration}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.date + " " + item.time}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography
                            sx={{
                              color: item.status === "Completed" ? "#00e676" : "#f44336",
                              fontWeight: "bold",
                            }}
                          >
                            {item.status}
                          </Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Typography>{item.mode}</Typography>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Button size="small" variant="contained" color="primary">
                            {item.action}
                          </Button>
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <AddCircleOutline sx={{ color: "#00f0c0", cursor: "pointer" }} />
                        </StyledCardContent>
                        <StyledCardContent style={{ flex: 1 }}>
                          <Visibility sx={{ color: "#00f0c0", cursor: "pointer" }} />
                        </StyledCardContent>
                      </EnquiryCardBody>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SopTask;
