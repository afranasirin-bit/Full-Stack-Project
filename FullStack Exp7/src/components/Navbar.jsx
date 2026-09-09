import { FaTasks, FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaTasks className="logo-icon" />
        <h2>Project Dashboard</h2>
      </div>

      <div className="nav-right">

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <div>
            <h4>Admin</h4>
            <p>Project Manager</p>
          </div>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;