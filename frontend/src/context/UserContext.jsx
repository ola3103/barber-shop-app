import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as apiClient from "../utils/apiClient";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    return async () => {
      if (location.pathname === "/home") {
        const response = await apiClient.handleUserAndAuth();
        if (response.data.status === "success") {
          setUser(response.data.data);
          setIsLoggedIn(true);
        }
      }
    };
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
