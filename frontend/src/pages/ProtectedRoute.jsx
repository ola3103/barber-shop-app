import { Outlet, useNavigate } from "react-router-dom";
import { GlobalUserContext } from "../context/UserContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = GlobalUserContext();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  return isLoggedIn ? <Outlet /> : navigate("/");
};

export default ProtectedRoute;
