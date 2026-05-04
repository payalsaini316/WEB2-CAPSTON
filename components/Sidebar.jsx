import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Student Panel</h2>
      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/students">🎓 Students</Link></li>
        <li><Link to="/courses">📚 Courses</Link></li>
      </ul>
    </div>
  );
}