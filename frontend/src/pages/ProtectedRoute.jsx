import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalUserContext } from "../context/UserContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = GlobalUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRoute;
