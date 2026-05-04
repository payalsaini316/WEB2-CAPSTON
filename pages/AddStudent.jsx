
import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function AddStudent() {
  const [name, setName] = useState("");
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ id: Date.now(), name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button>Add</button>
    </form>
  );
}