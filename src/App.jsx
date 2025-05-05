import { useState, useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Dashboard from "./Componenets/Dashboard/Dashboard";
import Login from "./Componenets/Login/Login";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔐 Track login

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

      {!isLoggedIn ? (
        // 🔐 Show login only
        <Login setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        // 🧭 Main App Layout after login
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar darkMode={darkMode} />
          <div style={{ flex: 1 }}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
            </Routes>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
