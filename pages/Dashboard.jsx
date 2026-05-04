export default function Dashboard() {
  return (
    <div>
      <div className="topbar">
        <h1>Student Dashboard</h1>
        <input placeholder="Search..." />
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <p>1200</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>35</p>
        </div>

        <div className="card">
          <h3>Teachers</h3>
          <p>80</p>
        </div>
      </div>

      <div className="welcome">
        <h2>Welcome to Student Dashboard</h2>
        <button onClick={() => alert("Dashboard Working 🚀")}>
          Click Me
        </button>
      </div>
    </div>
  );
}