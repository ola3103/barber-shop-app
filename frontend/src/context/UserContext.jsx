import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as apiClient from "../utils/apiClient";
import axios from "axios";
import notification from "../utils/notification";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleUserAndAuth = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/auth/me`, {
        withCredentials: true,
      });
      setUser(response.data.data);
      setIsLoggedIn(true);
      console.log(response);
      return response;
    } catch (error) {
      notification({ message: error.response.data.message, status: "error" });
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.pathname === "/home") {
      handleUserAndAuth();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const GlobalUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, UserContext };
