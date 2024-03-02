import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as apiClient from "../utils/apiClient";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    return async () => {
      const response = await apiClient.isLoggedIn();
      if (response.data.status === "success") {
        setIsLoggedIn(true);
      }
    };
  }, []);

  return isLoggedIn ? <Outlet /> : navigate("/sign-in");
};

export default ProtectedRoute;
