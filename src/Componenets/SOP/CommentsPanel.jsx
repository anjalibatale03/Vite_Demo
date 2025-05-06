import React from 'react';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';

function CommentsPanel({ darkMode }) {
  const paperStyle = {
    padding: 2,
    borderRadius: 3,
    height: '100%',
    backgroundColor: darkMode ? '#0a1929' : '#fff',
    color: darkMode ? '#fff' : '#000',
    transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
  };

  const textFieldStyle = {
    mb: 2,
    backgroundColor: darkMode ? '#1e293b' : '#f9f9f9',
    borderRadius: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: darkMode ? '#334155' : '#ccc',
      },
      '&:hover fieldset': {
        borderColor: darkMode ? '#60a5fa' : '#1976d2',
      },
    },
    input: { color: darkMode ? '#fff' : '#000' },
    textarea: { color: darkMode ? '#fff' : '#000' },
  };

  return (
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h6" mb={2}>
        Comments:
      </Typography>
      <TextField
        multiline
        rows={6}
        fullWidth
        variant="outlined"
        placeholder="Write your comments here..."
        sx={textFieldStyle}
        InputLabelProps={{ style: { color: darkMode ? '#fff' : '#000' } }}
      />
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </Paper>
  );
}

export default CommentsPanel;
