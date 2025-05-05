import { Routes, Route } from "react-router-dom";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";
import Login from "./Componenets/Login/Login";

function App() {

  return (
 
      <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes here */}
      </Routes>
{/* 
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ position: "fixed", left: 0, top: 0 }}>
          <Sidebar />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
        </div>
      </div> */}
    </>
  );
}

export default App;
