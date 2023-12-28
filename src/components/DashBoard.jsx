// UserDashboard.js
import PropTypes from "prop-types";

const DashBoard = ({ user }) => {
  console.log("Received user prop:", user);

  console.log("Received user prop:", user);

  if (!user || !user.userId || !user["Student Name"] || !user["Father Name"]) {
    console.error("Invalid or incomplete user information:", user);
    return <div>Error: Invalid or incomplete user information</div>;
  }
  const {
    userId,
    "Student Name": studentName,
    "Father Name": fatherName,
  } = user;

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
        {/* ... */}
        <div className="text-center mb-4">
          <img
            src={""}
            alt="Profile Picture"
            className="rounded-full h-16 w-16 mx-auto mb-4"
          />
          <p className="text-gray-500">Id: {userId}</p>
          <h1 className="text-xl font-bold">Student Name: {studentName}</h1>
          <p className="text-gray-500">Father Name: {fatherName}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">User Information</h2>
          {/* ... */}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    "Student Name": PropTypes.string.isRequired,
    "Father Name": PropTypes.string.isRequired,
  }),
};
export default DashBoard;
