import { useState, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Sop from "./Componenets/SOP/Sop";
import Login from "./Componenets/Login/Login";
import AlertPanel from "./Componenets/SuperAdmin/AlertPanel";
import Footer from "./Componenets/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const hideSidebarRoutes = ["/alert-panel", "/Sop"]; // ✅ Use exact paths here
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


        {!isLoggedIn ? (
              // 🔐 Show login only
              <Login setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode} />
            ) : (
      <div  style={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: darkMode ? "#0a1929" : "#f5f5f5",
          transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
        }}>
        <div style={{ flex: 1 }}>
        {!shouldHideSidebar && <Sidebar darkMode={darkMode} />}

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/Sop" element={<Sop darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/Login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/alert-panel" element={<AlertPanel darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
        )}
    </ThemeProvider>
  );
}

export default App;
