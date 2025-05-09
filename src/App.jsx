import { useState, useMemo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Sop from "./Componenets/SuperAdmin/SOP/Sop";
import Login from "./Componenets/Login/Login";
import AlertPanel from "./Componenets/SuperAdmin/AlertPanel";
import Footer from "./Componenets/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Create the theme based on dark mode state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // Define paths where layout components (Sidebar, Navbar, Footer) should be hidden
  const authRoutes = ["/login", "/Login"];
  const isAuthRoute = authRoutes.includes(location.pathname);
  
  // Define paths where only sidebar should be hidden
  const hideSidebarRoutes = ["/alert-panel", "/Sop"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <div style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#0a1929" : "#f5f5f5",
        transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
      }}>
        <div style={{ flex: 1 }}>
          {/* Only render Sidebar, Navbar, and Footer if not on auth routes */}
          {!isAuthRoute && !shouldHideSidebar && <Sidebar darkMode={darkMode} />}
          {!isAuthRoute && <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          
          <Routes>
            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/Login" replace  />} />
            <Route path="/Login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode}   />} />
            <Route path="/Sop" element={<Sop darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/alert-panel" element={<AlertPanel darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
          
          {!isAuthRoute && <Footer darkMode={darkMode} setDarkMode={setDarkMode} />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;