import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import StudentRegistration from "./StudentRegistration";
import StudentList from "./StudentList";
import DashBoard from "./DashBoard";

export const router = (
  <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path=""></Route>
    <Route path="/registration" element={<StudentRegistration />} />
    <Route path="/all-students" element={<StudentList />} />
    <Route path="/dashBoard" element={<DashBoard />} />
  </Routes>
);

const MainCompo = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Router>{router}</Router>
    </div>
  );
};
export default MainCompo;

// export const router = (
//   <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/registration" element={<StudentRegistration />} />
//     <Route path="/all-students" element={<StudentList />} />
//     <Route path="/dashBoard" element={<DashBoard />} />
//   </Routes>
// );

// export default function App() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <Router>{router}</Router>
//     </div>
//   );
// }
