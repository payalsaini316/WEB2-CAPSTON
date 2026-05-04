import { useState } from "react";

export default function Students() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 1, name: "Rahul", attendance: "Present", activity: "Active" },
    { id: 2, name: "Priya", attendance: "Absent", activity: "Inactive" },
    { id: 3, name: "Amit", attendance: "Present", activity: "Active" },
    { id: 4, name: "Neha", attendance: "Absent", activity: "Active" },
  ];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Students</h2>

      
      <input
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      {filtered.map((s) => (
        <div className="card" key={s.id}>
          <h3>{s.name}</h3>
          <p>Attendance: {s.attendance}</p>
          <p>Status: {s.activity}</p>
        </div>
      ))}
    </div>
  );
}