import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Borrow() {
  const [form, setForm] = useState({
    reader_id: "",
    book_copy_id: "",
    librarian_id: "",
    borrow_date: ""
  });

  const handleSubmit = async () => {
    try {
      await API.post("/borrow", form);
      alert("Mượn sách thành công");
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Borrow Book</h2>

      <input placeholder="Reader ID" onChange={(e) => setForm({ ...form, reader_id: e.target.value })} />
      <input placeholder="Book Copy ID" onChange={(e) => setForm({ ...form, book_copy_id: e.target.value })} />
      <input placeholder="Librarian ID" onChange={(e) => setForm({ ...form, librarian_id: e.target.value })} />
      <input placeholder="Borrow Date" onChange={(e) => setForm({ ...form, borrow_date: e.target.value })} />

      <button onClick={handleSubmit}>Borrow</button>
    </div>
  );
}

export default Borrow;