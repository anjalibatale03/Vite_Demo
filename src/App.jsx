import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Navbar from "./Componenets/Navbar/Navbar";

function App() {

  return (
    <Router>
      {/* <Navbar />
      <Sidebar /> */}
      <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
        <div style={{ position: "fixed", left: 0, top: 0 }}>
          <Sidebar />
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,}}>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
