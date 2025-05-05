import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import AlertPanel from "./Componenets/SuperAdmin/AlertPanel";

function App() {
  const [isAlertPanel, setIsAlertPanel] = useState(false);

  const LocationTracker = () => {
    const location = useLocation();

    useEffect(() => {
      setIsAlertPanel(location.pathname === "/alert-panel");
    }, [location]);

    return null;
  };

  ///// DARK MODE
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
        <LocationTracker />
        <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
          {!isAlertPanel && (
            <div style={{ position: "fixed", left: 0, top: 0 }}>
              <Sidebar />
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
          </div>

          <Routes>
            <Route path="/alert-panel" element={<AlertPanel />} />
          </Routes>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
        </div>
      </div> */}
    </>
  );
}

export default App;
