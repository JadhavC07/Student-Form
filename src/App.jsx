import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentRegistration from "./components/StudentRegistration";
import StudentList from "./components/StudentList";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

export const router = (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/registration" element={<StudentRegistration />} />
    <Route path="/all-students" element={<StudentList />} />
    <Route path="/DashBoard" element={<DashBoard />} />
  </Routes>
);

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Router>{router}</Router>
    </div>
  );
}
