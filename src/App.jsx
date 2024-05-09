import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import StudentList from "./components/StudentList";
import DashBoard from "./components/DashBoard";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
      <NavLink to="/Student-Form">Login</NavLink> <br />
      <NavLink to="/Student-Form/registration">Regitration</NavLink> <br />
      <NavLink to="/Student-Form/all-students">Student List</NavLink> <br />
      <NavLink to="/Student-Form/dashboard">Dashboard</NavLink>
      <Routes>
        <Route path="/Student-Form" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/Student-Form/registration"
          element={<StudentRegistration />}
        />
        <Route path="/Student-Form/all-students" element={<StudentList />} />
        <Route path="/Student-Form/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
