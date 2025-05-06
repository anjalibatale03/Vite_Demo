import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Stack,
} from '@mui/material';

function IncidentDetails({ darkMode }) {
  const labelColor = darkMode ? '#90caf9' : '#1976d2';

  const sectionStyle = {
    borderRight: `1px solid ${darkMode ? '#1e1e1e' : '#ccc'}`,
    pr: 3,
  };

  return (
    <>
      <Typography variant="h6" mb={2}>
        <strong>Incident Details</strong>
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: darkMode ? '#0a1929' : '#fff',
          color: darkMode ? '#ffffff' : '#000000',
          transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid item xs={6} sx={sectionStyle}>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident ID</Typography>
              <Typography>20230524000004</Typography>
            </Box>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident Type</Typography>
              <Typography>Flood</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident Description</Typography>
              <Typography>Flood near Sea</Typography>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={6} pl={3}>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Response Procedure</Typography>
              <Typography>Mass intimation to public, Media, Boat, Fisheries</Typography>
            </Box>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Alert Type</Typography>
              <Typography>Coast Guard</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Responder Scope</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center" mt={1}>
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ color: labelColor }} />}
                  label="Police"
                />
                <FormControlLabel
                  control={<Checkbox sx={{ color: labelColor }} />}
                  label="Fire"
                />
                <FormControlLabel
                  control={<Checkbox sx={{ color: labelColor }} />}
                  label="Marine"
                />
                <FormControlLabel
                  control={<Checkbox sx={{ color: labelColor }} />}
                  label="Fisheries"
                />
                <Box ml="auto">
                  <Button variant="contained" color="info">
                    Notify
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default IncidentDetails;
