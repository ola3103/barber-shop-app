import { Link } from "react-router-dom";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const HomeNavbar = () => {
  const [showNav, setShowNav] = useState(false);

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
            <button href="" className="logout_btn">
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
