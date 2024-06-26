import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import DashBoard from "./DashBoard";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: " ",
    password: " ",
  });

  useEffect(() => {
    document.getElementById("passwordInput").value = "";
  }, []);
  const [notification, setNotification] = useState("");
  const [userState, setUser] = useState(null);

  const history = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { user } = state || {};

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://back-end-deploy-production-c369.up.railway.app/api/login", loginData)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        history("/Student-Form/dashboard", { state: { user: response.data } });
      })
      .catch((error) => {
        if (error.response) {
          setNotification(
            "Login failed with status code:" + error.response.status
          );

          if (error.response.status === 401) {
            setNotification("Invalid Password or User Not Found");
          } else {
            // ehllo
          }
        } else if (error.request) {
          setNotification("No response received");
        } else {
          setNotification("Error setting up the request:", error.message);
        }
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4" data-testid="cypress-title">
        Anywhere in your app!
      </h1>
      <div className="mb-4 text-red-500">{notification}</div>
      <NavLink
        type="button"
        to="/Student-Form/all-students"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        All
      </NavLink>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="password"
            id="passwordInput"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          {user && <DashBoard user={user} />}
          <NavLink
            type="button"
            to="/Student-Form/registration"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Regitration
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
