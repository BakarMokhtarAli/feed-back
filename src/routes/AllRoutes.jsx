import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};
