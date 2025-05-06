import React from 'react'
import { Paper, Typography, TextField, Button } from "@mui/material";
function CommentsPanel() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 3, backgroundColor: "#0a1929", height: "100%" }}>
      <Typography variant="h6" color="white" mb={2}>Comments:</Typography>
      <TextField
        multiline
        rows={6}
        fullWidth
        variant="outlined"
        placeholder="Write your comments here..."
        sx={{
          mb: 2,
          backgroundColor: "#fff",
          borderRadius: 1
        }}
      />
      <Button variant="contained" color="primary">Save</Button>
    </Paper>
  );
}

export default CommentsPanel