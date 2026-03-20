import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Readers from "./pages/Readers";
import Borrow from "./pages/Borrow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/readers" element={<Readers />} />
        <Route path="/borrow" element={<Borrow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;