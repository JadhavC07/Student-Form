import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUserData } from "./userSlice";
import PropTypes from "prop-types";

const UserApi = ({ userId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.example.com/users/${userId}`)
      .then((response) => {
        dispatch(setUserData(response.data));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId, dispatch]);

  return null;
};

UserApi.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default UserApi;
