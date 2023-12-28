import { useState, useEffect } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getAllStudents")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data", error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Sr. No</th>
              <th className="border border-gray-300 px-4 py-2">Student Name</th>
              <th className="border border-gray-300 px-4 py-2">Father Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">DOB</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Blood-Group</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">E-mail</th>
              <th className="border border-gray-300 px-4 py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {student.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.studentName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.fatherName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.dob}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.course}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.bloodGroup}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.password}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
