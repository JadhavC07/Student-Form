import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    studentName: " ",
    fatherName: " ",
    lastName: " ",
    dob: " ",
    course: " ",
    bloodGroup: " ",
    gender: " ",
    email: " ",
    password: "",
  });

  const [notification, setNotification] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
    setFormData({
      studentName: "",
      fatherName: "",
      lastName: "",
      dob: "",
      course: "",
      bloodGroup: "",
      gender: "",
      email: "",
      password: "",
    });
  };

  const baseURL = "https://back-end-deploy-production-c369.up.railway.app/api";
  const sendDataToBackend = (data) => {
    axios
      .post(`${baseURL}/submitForm`, data)
      .then((response) => {
        console.log("Data sent successfully", response.data);
        setNotification("Data sent successfully");
      })
      .catch((error) => {
        console.error("Error sending data to the backend", error);

        if (error.response) {
          console.log("Error response details:", error.response.data);
          setNotification(
            `Error: ${error.response.status} - ${error.response.data.message}`
          );
        } else if (error.request) {
          console.log("Error with request:", error.request);
          setNotification("Error with the request. Please try again.");
        } else {
          console.log("Other error details:", error.message);
          setNotification("Error submitting form. Please try again.");
        }
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1
        className="text-2xl font-bold mb-4 text-center"
        data-testid="cypress-title"
      >
        Student Registration
      </h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="studentName"
          >
            Student Name
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fatherName"
          >
            Father Name
          </label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of Birth (DOB)
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Course
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Course</option>
            <option value="engineering">Engineering</option>
            <option value="management">Management</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bloodGroup"
          >
            Blood Group
          </label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            {/* Add other blood groups as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
          <NavLink
            type="button"
            to="/Student-Form"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </NavLink>
        </div>
        <div className="mb-4 text-red-500">{notification}</div>
      </form>
    </div>
  );
};

export default StudentRegistration;
