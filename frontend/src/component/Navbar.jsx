import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavView = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav_bar">
      <div className="navbar_container container">
        <a href="" className="navbar_link navbar_logo">
          logo
        </a>
        <ul
          className={
            showNav ? "open_navbar navbar_items" : "close_navbar navbar_items"
          }
        >
          <li className="single_navbar_item">
            <a href="" className="navbar_link">
              Book Appointment
            </a>
          </li>
          <li className="single_navbar_item">
            <a href="" className="navbar_link">
              Log In
            </a>
          </li>
          <li className="single_navbar_item">
            <a href="" className="navbar_link">
              Register
            </a>
          </li>
        </ul>
        <button onClick={handleNavView} className="menu_icon_btn">
          {!showNav ? <MdMenu /> : <MdClose />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
