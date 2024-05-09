/* eslint-disable no-unused-vars */
import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import StudentList from "./components/StudentList";
import DashBoard from "./components/DashBoard";

// const router = createBrowserRouter([
//   {
//     path: "/Student-Form",
//     element: <App />,
//     children: [
//       {
//         path: "/Student-Form",
//         element: <Login />,
//       },
//       {
//         path: "/Student-Form/registration",
//         element: <StudentRegistration />,
//       },
//       {
//         path: "/Student-Form/all-students",
//         element: <StudentList />,
//       },
//       {
//         path: "/Student-Form/dashboard",
//         element: <DashBoard />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
