import { useNavigate, useLocation } from "react-router-dom";
import notification from "../utils/notification";
import axios from "axios";

import Loader from "../component/Loader";
import { useEffect, useState } from "react";
import { GlobalUserContext } from "../context/UserContext";

const VerifyEmail = () => {
  const { setUser, setIsLoggedIn, isLoggedIn } = GlobalUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsloading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const dataObj = {
    email: queryParams.get("email"),
    token: queryParams.get("token"),
  };

  const handleVerifyEmail = async () => {
    setIsloading(true);
    try {
      const response = await axios.post(
        `http://localhost:4050/api/v1/auth/verify-user`,
        dataObj,
        { withCredentials: true }
      );
      console.log(response);
      setUser(response.data.data);
      setIsLoggedIn(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
      notification({ message: error.response.data.message, status: "error" });
    }
    setIsloading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      handleVerifyEmail();
    }
  }, []);

  if (isLoading) {
    <Loader />;
  }

  return isLoggedIn ? navigate("/home") : <Loader />;

  // return (
  //   <div>
  //     <Loader />
  //   </div>
  // );
};

export default VerifyEmail;
