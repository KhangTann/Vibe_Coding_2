import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Readers() {
  const [readers, setReaders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    class: "",
    dob: "",
    gender: ""
  });

  const fetchReaders = async () => {
    try {
      const res = await API.get("/readers");
      setReaders(res.data);
    } catch {
      alert("Lỗi load dữ liệu");
    }
  };

  useEffect(() => {
    fetchReaders();
  }, []);

  const handleSubmit = async () => {
    try {
      await API.post("/readers", form);
      alert("Thêm thành công");
      fetchReaders();
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Reader Management</h2>

      <h3>Thêm độc giả</h3>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Class" onChange={(e) => setForm({ ...form, class: e.target.value })} />
      <input placeholder="DOB" onChange={(e) => setForm({ ...form, dob: e.target.value })} />
      <input placeholder="Gender" onChange={(e) => setForm({ ...form, gender: e.target.value })} />
      <button onClick={handleSubmit}>Add</button>

      <h3>Danh sách</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {readers.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.class}</td>
              <td>{r.dob}</td>
              <td>{r.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Readers;