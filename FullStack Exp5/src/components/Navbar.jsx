import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaShoppingBag />
        <span>ClassiMart</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-product">Sell</Link>
        <Link to="/my-products">My Listings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;