import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import loginBg from "../../assets/login_image.png";

function Login() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",

          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Foreground */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {!isSmallScreen && <Box sx={{ flex: 1 }} />}

        {/* Form Panel */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "350px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D2F1FA4D",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              width: "80%",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              <b>User Login</b>
            </Typography>

            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography
                sx={{
                  color: "black",
                  mb: 0.5,
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                User Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Name"
                InputLabelProps={{ shrink: false }}
                sx={{
                  color: "#AEAEAE",
                  borderRadius: "12px",
                  "& fieldset": {
                    borderRadius: "8px", // applies to the outlined border
                  },
                  backgroundColor: "white",
                  "& input::placeholder": {
                    fontSize: "0.75rem", // or smaller like '0.75rem'
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography
                sx={{
                  color: "black",
                  mb: 0.5,
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Password"
                type="password"
                InputLabelProps={{ shrink: false }}
                sx={{
                  color: "#AEAEAE",
                  borderRadius: "12px",
                  "& fieldset": {
                    borderRadius: "8px", // applies to the outlined border
                  },
                  borderColor: "#AEAEAE",
                  backgroundColor: "white",
                  "& input::placeholder": {
                    fontSize: "0.75rem", // or smaller like '0.75rem'
                  },
                }}
              />
            </Box>

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                width: "50%",
                backgroundColor: "#2196F3",
                color: "#fff",
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#1976D2",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
