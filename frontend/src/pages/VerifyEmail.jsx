import Loader from "../component/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  return (
    <div>
      <Loader />
    </div>
  );
};

export default VerifyEmail;
