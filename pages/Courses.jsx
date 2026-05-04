export default function Courses() {
  const courses = [
    { id: 1, name: "React JS", students: 120 },
    { id: 2, name: "Python", students: 90 },
    { id: 3, name: "Java", students: 80 },
  ];

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((c) => (
        <div className="card" key={c.id}>
          <h3>{c.name}</h3>
          <p>Students Enrolled: {c.students}</p>
        </div>
      ))}
    </div>
  );
}