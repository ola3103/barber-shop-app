import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { GlobalUserContext } from "../context/UserContext";
import axios from "axios";
import notification from "../utils/notification";

const HomeNavbar = () => {
  const { setUser, setIsLoggedIn } = GlobalUserContext();
  const [showNav, setShowNav] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/v1/auth/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setIsLoggedIn(false);
      setUser(null);
      navigate("/");
    } catch (error) {
      notification({ message: error.response.data.message, status: "error" });
      navigate("/");
    }
  };

  const handleNavView = () => {
    setShowNav(!showNav);
  };

  const handleCloseNavView = () => {
    setShowNav(false);
  };

  return (
    <nav className="nav_bar">
      <div className="navbar_container container">
        <Link to="/home" className="navbar_link navbar_logo">
          logo
        </Link>
        <ul
          className={
            showNav ? "open_navbar navbar_items" : "close_navbar navbar_items"
          }
        >
          <li className="single_navbar_item">
            <Link
              onClick={handleCloseNavView}
              to="/bookings"
              href=""
              className="navbar_link"
            >
              My Bookings
            </Link>
          </li>
          <li className="single_navbar_item">
            <button className="logout_btn" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
        <button onClick={handleNavView} className="menu_icon_btn">
          {!showNav ? <MdMenu /> : <MdClose />}
        </button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
