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
import AdbIcon from "@mui/icons-material/Adb";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const pages = ["Products", "Pricing", "Blog", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

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
        width: "100vw",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            LOGO
          </Typography>
        </Box>

        {/* Middle: Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap: 2 }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "inherit" }}>
              {page}
            </Button>
          ))}
        </Box>

        {/* Right: Dark Mode Toggle & Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseMenu}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Avatar Menu */}
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseMenu}>
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
