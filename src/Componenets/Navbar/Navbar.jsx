import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const pages = [];
const settings = ["Profile", "Logout"];

function Navbar({ darkMode, setDarkMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "black" : "white", // Fix dark mode background here
        color: darkMode ? "white" : "black", // Text color should also switch
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            paddingX: "10px",
            paddingY: "3px",
            borderRadius: "40px",
            background: "linear-gradient(90deg, #1C3B52 0%, #2EB9A3 100%)",
            transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out", 
            // Gradient for dark mode
            border: darkMode ? "2px solid #5BB9B4" : "2px solid #1C3B52", // Adjust border color
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              color: darkMode ? "#E5F3F5" : "#333", // Adjust text color for dark mode
              transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out", 
              fontSize: "20px",
              fontWeight: 400,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Spero
          </Typography>
          <Typography
            sx={{
              color: darkMode ? "#E5F3F5" : "#333", // Adjust text color for dark mode
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            DMS
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            gap: 2,
          }}
        >
          {pages.map((page) => (
            <Button key={page} sx={{ color: darkMode ? "white" : "black" }}>
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": {
                  transform: "rotate(20deg)",
                },
              }}
            >
              {darkMode ? (
                <LightModeIcon
                  sx={{
                    color: "#FFD700", // Yellow
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                />
              ) : (
                <DarkModeIcon
                  sx={{
                    color: "#ffffff", // White
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                />
              )}
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseMenu}>
                <Typography>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
