// UserDashboard.js
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  const { state } = location;
  const { user } = state || {};
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
        <div className="text-center mb-4">
          <h2>Welcome, {user ? user["Student Name "] : "Guest"}!</h2>
          {user && user.message && <p>{user.message}</p>}
          {user && user["Father Name"] && (
            <p>Father Name: {user["Father Name"]}</p>
          )}
          {user && user.Gender && <p>Gender: {user.Gender}</p>}
          {user && user["Blood Group"] && (
            <p>Blood Group: {user["Blood Group"]}</p>
          )}
          {user && user.Course && <p>Course: {user.Course}</p>}
          {user && user.userId && <p>User ID: {user.userId}</p>}
        </div>
        {/* ... rest of the component */}
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  user: PropTypes.shape({
    "Student Name ": PropTypes.string.isRequired,
    "Father Name": PropTypes.string,
    Gender: PropTypes.string,
    "Blood Group": PropTypes.string,
    Course: PropTypes.string,
    message: PropTypes.string,
    userId: PropTypes.number,
    // Add other properties based on your user object structure
  }),
};

export default DashBoard;
