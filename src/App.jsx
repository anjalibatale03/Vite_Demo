import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import AlertPanel from "./Componenets/SuperAdmin/AlertPanel";

function App() {
  const path = window.location.pathname;

  return (
    <Router>
      <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
        {path !== "/alert-panel" && (
          <div style={{ position: "fixed", left: 0, top: 0 }}>
            <Sidebar />
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", }}>
          <Navbar />
        </div>

        <Routes>
          <Route path="/alert-panel" element={<AlertPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
