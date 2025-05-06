import { Box, Typography } from '@mui/material';

export default function Footer({ darkMode }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: darkMode ? "#0a1929" : "#f5f5f5",
                color: darkMode ? 'white' : 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 1,
            }}
        >
            <Typography
                variant="subtitle2"
                align="center"
                sx={{
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    textDecoration: 'none',
                }}
            >
                Powered by Spero 2025
            </Typography>
        </Box>
    );
}
