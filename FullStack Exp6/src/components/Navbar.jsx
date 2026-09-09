import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>LeaveMS</h2>

      <div>
        <Link
          to="/dashboard"
          style={{ color: "white", marginRight: "20px" }}
        >
          Dashboard
        </Link>

        <Link
          to="/apply"
          style={{ color: "white", marginRight: "20px" }}
        >
          Apply Leave
        </Link>

        <Link
          to="/myleaves"
          style={{ color: "white" }}
        >
          My Leaves
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;