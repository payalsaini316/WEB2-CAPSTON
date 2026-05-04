import { Link } from "react-router-dom";

export default function Navbar({ toggleDark }) {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | 
      <Link to="/students">Students</Link> | 
      <Link to="/add">Add Student</Link>

      <button onClick={toggleDark} style={{ marginLeft: "10px" }}>
        🌙 Dark Mode
      </button>
    </nav>
  );
}