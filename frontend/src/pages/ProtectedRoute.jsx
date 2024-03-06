import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalUserContext } from "../context/UserContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = GlobalUserContext();
  const navigate = useNavigate();

  return isLoggedIn ? <Outlet /> : navigate("/");
};

export default ProtectedRoute;
