import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/readers">Readers</Link> |{" "}
      <Link to="/borrow">Borrow</Link>
    </div>
  );
}

export default Navbar;