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
  const labelColor = darkMode ? '#5FECC8' : '#1976d2';
  const textColor = darkMode ? '#ffffff' : '#000000';
  const borderColor = darkMode ? '#1e1e1e' : '#ccc';

  return (
    <>
      <Typography variant="h6" mb={2} fontWeight="bold" color={labelColor}>
        Incident Details
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: darkMode ? '#0a1929' : '#fff',
          color: textColor,
          transition: 'all 0.3s ease',
        }}
      >
        <Grid container>
          {/* Left Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ borderRight: { md: `1px solid ${borderColor}` }, pr: { md: 2 }, mb: { xs: 2, md: 0 } }}
          >
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident ID</Typography>
              <Typography>20230524000004</Typography>
            </Box>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident Type</Typography>
              <Typography>Flood</Typography>
            </Box>
          </Grid>

          {/* Middle Column */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ borderRight: { md: `1px solid ${borderColor}` }, px: { md: 2 }, mb: { xs: 2, md: 0 } }}
          >
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Response Procedure</Typography>
              <Typography>Mass intimation to public, Media, Boat, Fisheries</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Incident Description</Typography>
              <Typography>Flood near Sea</Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4} pl={{ md: 2 }}>
            <Box mb={2}>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Alert Type</Typography>
              <Typography>Coast Guard</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: labelColor, fontWeight: 500 }}>Responder Scope</Typography>
              <Stack spacing={1} mt={1}>
                <Box display="flex" flexWrap="wrap" gap={1}>
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
                </Box>
                <Box textAlign="right">
                  <Button variant="contained" color="info" size="small">
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
