import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
      <NavLink to="/Student-Form">Login</NavLink> <br />
      <NavLink to="/Student-Form/registration">Regitration</NavLink> <br />
      <NavLink to="/Student-Form/all-students">Student List</NavLink> <br />
      <NavLink to="/Student-Form/dashboard">Dashboard</NavLink>
    </div>
  );
}
