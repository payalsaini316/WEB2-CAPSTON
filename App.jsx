import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;