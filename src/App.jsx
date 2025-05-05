import { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Login from "./Componenets/Login/Login";

function App() {
  // Retrieve the dark mode preference from localStorage, default to false (light mode)
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  // Memoized theme to prevent recreation on each render
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // Save darkMode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ backgroundColor: "inherit", minHeight: "100vh", color: "inherit" }}>
          <div style={{ position: "fixed", left: 0, top: 0 }}>
            <Sidebar />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
