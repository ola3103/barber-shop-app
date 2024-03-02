import { useNavigate, useLocation } from "react-router-dom";
import * as apiClient from "../utils/apiClient";

import Loader from "../component/Loader";
import { useEffect } from "react";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const dataObj = {
    email: queryParams.get("email"),
    token: queryParams.get("token"),
  };

  // useEffect(() => {
  //   return async () => {
  //     const response = await apiClient.handleVerifyEmail(dataObj);
  //     console.log(response);
  //     if (response.data.status === "success") {
  //       console.log("Verification successful");
  //       navigate("/home");
  //     }
  //   };
  // }, []);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default VerifyEmail;
