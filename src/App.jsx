import { useState, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Dashboard from "./Componenets/Dashboard/Dashboard";
import Login from "./Componenets/Login/Login";
import AlertPanel from "./Componenets/SuperAdmin/AlertPanel";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // Check if the current route is the AlertPanel route
  const isAlertPanelRoute = location.pathname === "/alert-panel";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <div style={{ flex: 1 }}>
        {!isAlertPanelRoute && <Sidebar darkMode={darkMode} />}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/Login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/alert-panel" element={<AlertPanel darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
