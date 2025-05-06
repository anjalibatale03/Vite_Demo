import React from 'react'
import { Paper, Grid, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";

function IncidentDetails() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 3, backgroundColor: "#0a1929", color: "white" }}>
    <Typography variant="h6" mb={2}>Rules</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography><strong>Incident ID:</strong> 20230524000014</Typography>
        <Typography><strong>Incident Type:</strong> Flood</Typography>
        <Typography><strong>Incident Description:</strong> Flood near Sea</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography><strong>Response Procedure:</strong> Mass intimation to public, Media, Boat, Fisheries</Typography>
        <Typography><strong>Alert Type:</strong> Coast Guard</Typography>
        <Typography><strong>Responder Scope:</strong></Typography>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Police" />
        <FormControlLabel control={<Checkbox />} label="Fire" />
        <FormControlLabel control={<Checkbox />} label="Marine" />
        <FormControlLabel control={<Checkbox />} label="Fisheries" />
        <Button variant="contained" color="success" sx={{ mt: 1 }}>Notify</Button>
      </Grid>
    </Grid>
  </Paper>
  );
}

export default IncidentDetails