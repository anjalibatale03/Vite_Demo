// src/App.jsx
import { useState, useMemo } from "react";
<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom"; // No Router here!
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> Stashed changes
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Dashboard from "./Componenets/Dashboard/Dashboard";
<<<<<<< Updated upstream
import Login from "./Componenets/Login/Login";
=======
>>>>>>> Stashed changes

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<<<<<<< Updated upstream
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar darkMode={darkMode} />
        <div style={{ flex: 1 }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard  darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
          <Routes>
            <Route path="/Login" element={<Login  darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
=======
      <Router>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar darkMode={darkMode} />
          <div style={{ flex: 1 }}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;